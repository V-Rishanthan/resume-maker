import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useContext, useEffect, useState } from "react";
import RichTextEditor from "../RichTextEditor";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// http://localhost:5173/dashboard/resume/1234/edit
const formField = {
  title: "",
  companyName: "",
  city: "",
  state: "",
  startDate: "",
  endDate: "",
  workSUmmery: "",
};

const Experince = () => {
  const [experienceList, setExperienceList] = useState([formField]);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const handleChange = (event, index) => {
    const newEntries = experienceList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setExperienceList(newEntries);
  };

  const AddNewExperince = () => {
    setExperienceList([...experienceList, formField]);
  };
  const RemoveExperince = () => {
    setExperienceList((experienceList) => experienceList.slice(0, -1));
  };

  const handleRichEditor = (e, name, index) => {
    const newEntries = experienceList.slice();
    newEntries[index][name] = e.target.value;
    setExperienceList(newEntries);
  };

  useEffect(() => {
    // console.log(experienceList);

    setResumeInfo({
      ...resumeInfo,
      experience: experienceList,
    });
  }, [experienceList]);
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
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  CompanyName
                </label>
                <Input
                  name="CompanyName"
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  City
                </label>
                <Input
                  name="city"
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  State
                </label>
                <Input
                  name="state"
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
                  onChange={(event) => handleChange(event, index)}
                />
              </div>

              {/* work Summery */}
              <div className="col-span-2 text-justify">
                <RichTextEditor
                  index={index}
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

        <Button>Save</Button>
      </div>
    </div>
  );
};

export default Experince;
