import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../resumeComponents/FormSection";
import ResumePriview from "../../resumeComponents/ResumePriview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { db } from "@/firebase/confic";
import { doc, getDoc } from "firebase/firestore";
import Dummy from "@/data/Dummy";

const Edit = () => {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    setResumeInfo(Dummy);
    GetResumeInfo();
  }, []);

  const GetResumeInfo = async () => {
    const docRef = doc(db, "UserResumes", params.resumeId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setResumeInfo(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="min-h-screen pt-28 px-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-secondary/30">
        {/* form Section */}
        <FormSection />

        {/* Priview Section */}
        <ResumePriview />
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default Edit;
