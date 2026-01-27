import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";

const Education = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [educationList, setEducationList] = useState([
    {
      universityName: "",
      degree: "",
      major: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleChange = (event, index) => {
    const newEntries = educationList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setEducationList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationList([
      ...educationList,
      {
        universityName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };
  const RemoveEducation = () => {
    setEducationList((educationList) => educationList.slice(0, -1));
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationList,
    });
  }, [educationList]);

  return (
    <div className="p-5 shadow-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add your Education Details</p>

      <div>
        {educationList?.map((education, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 my-5 p-3 border rounded-lg">
              <div className="col-span-2">
                <label htmlFor="#">UniversityName</label>
                <Input
                  name="universityName"
                  onChange={(e) => handleChange(event, index)}
                />
              </div>

              <div>
                <label htmlFor="#">degree</label>
                <Input
                  name="degree"
                  onChange={(e) => handleChange(event, index)}
                />
              </div>

              <div>
                <label htmlFor="#">Major</label>
                <Input
                  name="major"
                  onChange={(e) => handleChange(event, index)}
                />
              </div>

              <div>
                <label htmlFor="#">StartDate</label>
                <Input
                  name="startDate"
                  type="date"
                  onChange={(e) => handleChange(event, index)}
                />
              </div>

              <div>
                <label htmlFor="#">EndDate</label>
                <Input
                  name="endDate"
                  type="date"
                  onChange={(e) => handleChange(event, index)}
                />
              </div>

              <div className="col-span-2">
                <label htmlFor="#">Description</label>
                <Textarea
                  name="description"
                  onChange={(e) => handleChange(event, index)}
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
            onClick={AddNewEducation}
            className="text-primary"
          >
            + Add More Education
          </Button>
          <Button
            variant="outline"
            onClick={RemoveEducation}
            className="text-primary"
          >
            - Remove Education
          </Button>
        </div>

        <Button>Save</Button>
      </div>
    </div>
  );
};

export default Education;
