import React, { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useFirestore } from "@/hooks/Firestore";
import { useParams } from "react-router-dom";

const emptySkill = { name: "" };

const Skills = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [skillsList, setSkillsList] = useState([{ ...emptySkill }]);
  const [loading, setLoading] = useState(false);

  const { resumeId } = useParams();
  const { updateDocument } = useFirestore("UserResumes");

  const handleChange = (index, field, value) => {
    setSkillsList((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const addNewSkills = () => {
    setSkillsList((prev) => [...prev, { ...emptySkill }]);
  };

  const removeSkills = () => {
    setSkillsList((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  // Keep context in sync (optional)
  useEffect(() => {
    setResumeInfo({ ...resumeInfo, skills: skillsList });

  }, [skillsList]);

  const onSave = async () => {
    setLoading(true);
    try {
      if (!resumeId) {
        toast.error("Missing resumeId in URL");
        return;
      }

      // Optional: basic validation
      const cleaned = skillsList
        .map((s) => ({
          name: (s.name || "").trim(),

        }))
        .filter((s) => s.name.length > 0);

      await updateDocument(resumeId, { skills: cleaned });

      if (typeof enableNext === "function") enableNext(true);

      toast.success("Skills saved successfully", {
        description: "Your skills have been saved successfully.",
      });
    } catch (error) {
      console.log("Save skills error:", error?.message, error);
      toast.error("Skills save failed", {
        description: error?.message || "Check console for details",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 shadow-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add your top skills</p>

      <div className="mt-4">
        {skillsList.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between gap-4 border rounded-lg p-3 mb-2"
          >
            <div className="flex-1">
              <label className="text-xs">Name</label>
              <Input
                className="w-full"
                value={item.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="e.g., React, Firebase, UI/UX"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={addNewSkills}
            className="text-primary"
          >
            + Add More Skill
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={removeSkills}
            className="text-primary"
            disabled={skillsList.length <= 1}
          >
            - Remove Skill
          </Button>
        </div>

        <Button type="button" onClick={onSave} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default Skills;


