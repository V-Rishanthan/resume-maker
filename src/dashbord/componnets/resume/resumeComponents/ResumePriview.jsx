import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext } from "react";
// import PersonalDetails from "../../priview/PersonalDetailsPriview";
import SummeryPriview from "../../priview/SummeryPriview";
import PersonalExperincePriview from "../../priview/PersonalExperincePriview";
import EducationPriview from "../../priview/EducationPriview";
import SkillsPriview from "../../priview/SkillsPriview";
import PersonalDetailsPriview from "../../priview/PersonalDetailsPriview";

const ResumePriview = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{ borderColor: resumeInfo?.themeColor }}
    >
      {/* Personal Details */}
      <PersonalDetailsPriview resumeInfo={resumeInfo} />

      {/* summery */}
      <SummeryPriview resumeInfo={resumeInfo} />

      {/* Personal Experince */}
      <PersonalExperincePriview resumeInfo={resumeInfo} />

      {/* Education Details */}
      <EducationPriview resumeInfo={resumeInfo} />

      {/* Skills */}
      <SkillsPriview resumeInfo={resumeInfo} />
    </div>
  );
};

export default ResumePriview;
