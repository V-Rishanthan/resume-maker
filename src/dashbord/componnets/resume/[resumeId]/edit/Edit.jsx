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

  const handleDownloadPDF = async () => {
    setIsExporting(true);
    try {
      // Add a small delay to ensure the DOM is fully rendered
      await new Promise(resolve => setTimeout(resolve, 100));

      const resumeElement = resumeRef.current;

      console.log("Resume element found:", resumeElement);

      if (!resumeElement) {
        console.error("Resume preview container not found in DOM");
        toast.error("Resume preview not found!");
        setIsExporting(false);
        return;
      }

      // Show loading toast
      toast.loading("Generating PDF...");

      // Capture the resume as canvas with improved settings
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: true,
        backgroundColor: "#ffffff",
        windowWidth: resumeElement.scrollWidth,
        windowHeight: resumeElement.scrollHeight,
      });

      console.log("Canvas created:", canvas.width, "x", canvas.height);

      const imgData = canvas.toDataURL("image/png");

      // Create PDF
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content is longer than one page
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download the PDF
      const fileName = resumeInfo?.firstName
        ? `${resumeInfo.firstName}_${resumeInfo.lastName}_Resume.pdf`
        : "Resume.pdf";

      pdf.save(fileName);

      // Dismiss loading toast and show success
      toast.dismiss();
      toast.success("Resume downloaded successfully!");
    } catch (error) {
      console.error("Detailed error generating PDF:", error);
      console.error("Error stack:", error.stack);
      toast.dismiss();
      toast.error(`Failed to generate PDF: ${error.message}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="min-h-screen pt-28 px-10 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-secondary/30">
        {/* form Section */}
        <FormSection />

        {/* Priview Section */}
        <div className="relative">
          <ResumePriview ref={resumeRef} />

          {/* Export PDF Button */}
          <div className="mt-6 flex justify-center">
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
