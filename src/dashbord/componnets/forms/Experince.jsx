import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { useFirestore } from "@/hooks/Firestore";
import { useParams } from "react-router-dom";
import { Loader2 } from 'lucide-react'
import { toast } from "sonner";
// http://localhost:5173/dashboard/resume/1234/edit
const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSummery: "",
};

const Experince = ({ enableNext }) => {
  const [experienceList, setExperienceList] = useState([formField]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const { resumeId } = useParams();

  const { updateDocument } = useFirestore("UserResumes")

  useEffect(() => {
    if (resumeInfo?.experience?.length > 0) {
      setExperienceList(resumeInfo.experience);
    }
  }, []);

  const handleChange = (event, index) => {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[index] = {
      ...newEntries[index],
      [name]: value
    };
    setExperienceList(newEntries);
  };

  const AddNewExperince = () => {
    setExperienceList([...experienceList, { ...formField }]);
  };

  const RemoveExperince = () => {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  };

  const handleRichEditor = (e, name, index) => {
    const newEntries = experienceList.slice();
    newEntries[index] = {
      ...newEntries[index],
      [name]: e.target.value
    };
    setExperienceList(newEntries);
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);


  const onSave = async (e) => {
    e.preventDefault()
    setLoading(true);
    try {
      await updateDocument(resumeId, { experience: experienceList })
      enableNext(true)
      toast.success("Experience saved successfully", {
        description: "Your Experience has been saved successfully"
      })
    } catch (error) {
      console.log(error)
      toast.error("Experience saved failed")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-5 shadow-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Professional Experience</h2>
      <p>Add your professional experience</p>
      <div>
        {experienceList?.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 my-5 p-3 border rounded-lg">
              <div>
                <label className="text-xs" htmlFor="#">
                  Position Title
                </label>
                <Input
                  name="title"
                  value={item?.title}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  CompanyName
                </label>
                <Input
                  name="companyName"
                  value={item?.companyName}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  City
                </label>
                <Input
                  name="city"
                  value={item?.city}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  State
                </label>
                <Input
                  name="state"
                  value={item?.state}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  Start Date
                </label>
                <Input
                  type="date"
                  name="startDate"
                  value={item?.startDate}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  EndDate
                </label>
                <Input
                  type="date"
                  name="endDate"
                  value={item?.endDate}
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              {/* work Summery */}
              <div className="col-span-2 text-justify">
                <RichTextEditor
                  index={index}
                  defaultValue={item?.workSummery}
                  onRishTextEditorChanges={(event) =>
                    handleRichEditor(event, "workSummery", index)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewExperince}
            className="text-primary"
          >
            + Add More Experience
          </Button>
          <Button
            variant="outline"
            onClick={RemoveExperince}
            className="text-primary"
          >
            - Remove Experience
          </Button>
        </div>

        <Button disabled={loading} onClick={onSave}>
          {
            loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Save"
            )
          }
        </Button>
      </div>
    </div>
  );
};

export default Experince;
