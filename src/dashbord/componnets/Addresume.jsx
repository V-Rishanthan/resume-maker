import { PlusSquare, FileText, Plus, Loader2 } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/firebase/confic";
import { useUser } from "@clerk/clerk-react";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Addresume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState();
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  const onCreate = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      title: resumeTitle,
      resumeId: uuid,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
    };

    try {
      await setDoc(doc(db, "UserResumes", uuid), data);
      console.log("Document successfully written!");
      setLoading(false);
      navigation("/dashboard/resume/" + uuid + "/edit");
      setOpenDialog(false); // Close dialog after success
    } catch (error) {
      console.error("Error writing document: ", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="group p-14 py-24 border-2 border-dashed border-primary/20 bg-primary/5 rounded-xl h-[280px] 
        hover:scale-[1.02] transition-all duration-300 cursor-pointer hover:shadow-xl hover:border-primary/50 flex flex-col justify-center items-center gap-4"
        onClick={() => setOpenDialog(true)}
      >
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary transition-colors">
          <Plus className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
        </div>
        <p className="font-semibold text-lg text-primary">Create New Resume</p>
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl">Create New Resume</DialogTitle>
            <DialogDescription>
              Start building your professional resume by giving it a name.
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <Input
              className="w-full"
              placeholder="Ex. Full Stack Developer Resume"
              onChange={(e) => setResumeTitle(e.target.value)}
            />
          </div>

          <div className="flex gap-3 justify-end">
            <Button onClick={() => setOpenDialog(false)} variant="ghost">
              Cancel
            </Button>
            <Button disabled={!resumeTitle || loading} onClick={() => onCreate()}>
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Create Resume"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Addresume;
