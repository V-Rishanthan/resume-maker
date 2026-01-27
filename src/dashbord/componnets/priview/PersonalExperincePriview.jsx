import React from "react";

const PersonalExperincePriview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professinal Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.experience.map((experinec, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold "
            style={{ color: resumeInfo?.themeColor }}
          >
            {experinec?.title}
          </h2>
          <h2 className="text-xs flex justify-between ">
            {experinec?.companyName} , {experinec?.city} , {experinec?.state}
            <span>
              {experinec?.startDate} to
              {experinec?.currentlyWorking ? "Present" : experinec?.endDate}
            </span>
          </h2>
          {/* <p className="text-xs my-2">{experinec?.workSummery}</p> */}

          <div
            className="text-xs my-2"
            dangerouslySetInnerHTML={{ __html: experinec?.workSummery }}
          />
        </div>
      ))}
    </div>
  );
};

export default PersonalExperincePriview;
