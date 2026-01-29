import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Loader2 } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { toast } from "sonner";
import { useFirestore } from "@/hooks/Firestore";

const PersonalDetails = ({ enableNext }) => {
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const { updateDocument } = useFirestore("UserResumes");

  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log("---", resumeInfo);
  }, []);

  const handleInputChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setResumeInfo({
      ...resumeInfo,
      [name]: value,
    });
  };

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { firstName, lastName, jobTitle, address, phone, email } = resumeInfo || {};

    if (!firstName || !lastName || !jobTitle || !address || !phone || !email) {
      toast.warning("Incomplete Details", {
        description: "Please fill in all required fields before saving.",
      });

      setLoading(false);
      return;
    }

    try {
      await updateDocument(params?.resumeId, formData);
      enableNext(true);
      toast.success("Personal Details updated!", {
        description: "Personal Details updated successfully!"
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 shadow-lg border-t-primary border-t-4 mt-10 rounded-lg bg-card animate-in fade-in slide-in-from-bottom-4">
      <h2 className="font-bold text-lg text-foreground">Personal Details</h2>
      <p className="text-muted-foreground mb-4">Get Started with the basic information about yourself</p>

      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
          <div>
            <label className="text-sm font-medium">First Name</label>
            <Input name="firstName" defaultValue={resumeInfo?.firstName} onChange={handleInputChange} />
          </div>

          <div>
            <label className="text-sm font-medium">Last Name</label>
            <Input name="lastName" defaultValue={resumeInfo?.lastName} onChange={handleInputChange} />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Job Title</label>
            <Input name="jobTitle" defaultValue={resumeInfo?.jobTitle} onChange={handleInputChange} />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Address</label>
            <Input name="address" defaultValue={resumeInfo?.address} onChange={handleInputChange} />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Phone</label>
            <Input name="phone" defaultValue={resumeInfo?.phone} onChange={handleInputChange} />
          </div>

          <div className="col-span-2">
            <label className="text-sm font-medium">Email</label>
            <Input name="email" defaultValue={resumeInfo?.email} onChange={handleInputChange} />
          </div>
        </div>
        <div className="mt-3 flex justify-end">
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
