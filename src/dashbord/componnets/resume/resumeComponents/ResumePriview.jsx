import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, forwardRef } from "react";
// import PersonalDetails from "../../priview/PersonalDetailsPriview";
import SummeryPriview from "../../priview/SummeryPriview";
import PersonalExperincePriview from "../../priview/PersonalExperincePriview";
import EducationPriview from "../../priview/EducationPriview";
import SkillsPriview from "../../priview/SkillsPriview";
import PersonalDetailsPriview from "../../priview/PersonalDetailsPriview";

const ResumePriview = forwardRef((props, ref) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  return (
    <div
      ref={ref}
      id="resume-preview-container"
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
});

ResumePriview.displayName = "ResumePriview";

export default ResumePriview;
