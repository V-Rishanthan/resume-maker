import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../resumeComponents/FormSection";
import ResumePriview from "../../resumeComponents/ResumePriview";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { db } from "@/firebase/confic";
import { doc, getDoc } from "firebase/firestore";
import Dummy from "@/data/Dummy";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

const Edit = () => {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();
  const [isExporting, setIsExporting] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    setResumeInfo(Dummy);
    GetResumeInfo();
  }, []);

  const GetResumeInfo = async () => {
    const docRef = doc(db, "UserResumes", params.resumeId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setResumeInfo({ ...Dummy, ...docSnap.data() });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const handleDownloadPDF = () => {
    window.print()

  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="min-h-screen pt-28 px-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-secondary/30 print-layout">
        {/* form Section */}
        <div className="no-print">
          <FormSection />
        </div>

        {/* Priview Section */}
        <div className="relative print-container">
          <ResumePriview ref={resumeRef} />

          {/* Export PDF Button */}
          <div className="mt-6 flex justify-center no-print">
            <Button
              onClick={handleDownloadPDF}
              disabled={isExporting}
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              {isExporting ? "Generating PDF..." : "Export as PDF"}
            </Button>
          </div>
        </div>
      </div>
    </ResumeInfoContext.Provider>
  );
};

export default Edit;
