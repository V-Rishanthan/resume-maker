import React, { useEffect, useState } from "react";
import Addresume from "./componnets/Addresume";
import { useUser } from "@clerk/clerk-react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/confic";
import ResumeCardItem from "./componnets/ResumeCardItem";

const Dashbord = () => {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]);

  useEffect(() => {
    user && GetResumesList();
  }, [user]);

  /**
   * Used to Get Users Resume List
   */
  const GetResumesList = async () => {
    const q = query(
      collection(db, "UserResumes"),
      where("userEmail", "==", user?.primaryEmailAddress?.emailAddress)
    );

    const querySnapshot = await getDocs(q);
    setResumeList([]);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.data());
      setResumeList((prev) => [...prev, doc.data()]);
    });
  };

  return (
    <div className="min-h-screen bg-secondary/30 pt-24 pb-10">
      <div className="container mx-auto px-6">
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border mb-8">
          <h1 className="font-bold text-3xl tracking-tight text-foreground mb-2">My Resumes</h1>
          <p className="text-muted-foreground text-lg">
            Start creating your AI-powered resume for your next job role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Addresume />
          {
            resumeList.length > 0 ? resumeList.map((resume, index) => (
              <ResumeCardItem resume={resume} key={index} refreshData={GetResumesList} />
            ))
              :
              [1, 2, 3, 4].map((item, index) => (
                <div key={index} className='h-[280px] rounded-lg bg-slate-200 animate-pulse'>
                </div>
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
