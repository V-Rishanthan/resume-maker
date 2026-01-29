// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { ResumeInfoContext } from "@/context/ResumeInfoContext";
// import React, { useContext, useEffect, useState } from "react";
// import { useFirestore } from "@/hooks/Firestore";
// import { useParams } from "react-router-dom";
// import { Loader2 } from 'lucide-react'
// import { toast } from "sonner";

// const Education = () => {
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const [loading, setLoading] = useState(false);
//   const { updateDocument } = useFirestore("UserResumes")
//   const { resumeId } = useParams();
//   const [educationList, setEducationList] = useState([
//     {
//       universityName: "",
//       degree: "",
//       major: "",
//       startDate: "",
//       endDate: "",
//       description: "",
//     },
//   ]);


//   const handleChange = (event, index) => {
//     const newEntries = educationList.slice();
//     const { name, value } = event.target;
//     newEntries[index][name] = value;
//     setEducationList(newEntries);
//   };

//   const AddNewEducation = () => {
//     setEducationList([
//       ...educationList,
//       {
//         universityName: "",
//         degree: "",
//         major: "",
//         startDate: "",
//         endDate: "",
//         description: "",
//       },
//     ]);
//   };
//   const RemoveEducation = () => {
//     setEducationList((educationList) => educationList.slice(0, -1));
//   };

//   useEffect(() => {
//     setResumeInfo({
//       ...resumeInfo,
//       education: educationList,
//     });
//   }, [educationList]);


//   const onSave = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     try {
//       await updateDocument(resumeId, { education: educationList })
//       enableNext(true)
//       toast.success("Education saved successfully", {
//         description: "Your Education has been saved successfully"
//       })
//     } catch (error) {
//       console.log(error)
//       toast.error("Education saved failed")
//     } finally {
//       setLoading(false)
//     }

//   }


//   return (
//     <div className="p-5 shadow-lg border-t-primary border-t-4 mt-10">
//       <h2 className="font-bold text-lg">Education</h2>
//       <p>Add your Education Details</p>

//       <div>
//         {educationList?.map((education, index) => (
//           <div key={index}>
//             <div className="grid grid-cols-2 gap-3 my-5 p-3 border rounded-lg">
//               <div className="col-span-2">
//                 <label htmlFor="#">UniversityName</label>
//                 <Input
//                   name="universityName"
//                   onChange={(e) => handleChange(event, index)}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="#">degree</label>
//                 <Input
//                   name="degree"
//                   onChange={(e) => handleChange(event, index)}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="#">Major</label>
//                 <Input
//                   name="major"
//                   onChange={(e) => handleChange(event, index)}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="#">StartDate</label>
//                 <Input
//                   name="startDate"
//                   type="date"
//                   onChange={(e) => handleChange(event, index)}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="#">EndDate</label>
//                 <Input
//                   name="endDate"
//                   type="date"
//                   onChange={(e) => handleChange(event, index)}
//                 />
//               </div>

//               <div className="col-span-2">
//                 <label htmlFor="#">Description</label>
//                 <Textarea
//                   name="description"
//                   onChange={(e) => handleChange(event, index)}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-between">
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             onClick={AddNewEducation}
//             className="text-primary"
//           >
//             + Add More Education
//           </Button>
//           <Button
//             variant="outline"
//             onClick={RemoveEducation}
//             className="text-primary"
//           >
//             - Remove Education
//           </Button>
//         </div>

//         <Button onClick={onSave}>
//           {
//             loading ? (
//               <Loader2 className="animate-spin" />
//             ) : (
//               "Save"
//             )
//           }
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Education;


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { useFirestore } from "@/hooks/Firestore";
import { useParams } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const emptyEducation = {
  universityName: "",
  degree: "",
  major: "",
  startDate: "",
  endDate: "",
  description: "",
};

const Education = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const [loading, setLoading] = useState(false);
  const [educationList, setEducationList] = useState([{ ...emptyEducation }]);

  const { resumeId } = useParams();
  const { updateDocument } = useFirestore("UserResumes");

  const handleChange = (event, index) => {
    const { name, value } = event.target;

    setEducationList((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [name]: value };
      return copy;
    });
  };

  const addNewEducation = () => {
    setEducationList((prev) => [...prev, { ...emptyEducation }]);
  };

  const removeEducation = () => {
    setEducationList((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  // Keep context in sync
  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationList,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationList]);

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!resumeId) {
        toast.error("Missing resumeId in URL");
        return;
      }

      await updateDocument(resumeId, { education: educationList });

      // enableNext is optional
      if (typeof enableNext === "function") enableNext(true);

      toast.success("Education saved successfully", {
        description: "Your Education has been saved successfully",
      });
    } catch (error) {
      console.log("Save education error:", error?.message, error);
      toast.error("Education save failed", {
        description: error?.message || "Check console for details",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 shadow-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add your Education Details</p>

      <div>
        {educationList.map((education, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 my-5 p-3 border rounded-lg">
              <div className="col-span-2">
                <label className="text-xs" htmlFor="#">
                  University Name
                </label>
                <Input
                  name="universityName"
                  value={education.universityName}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  Degree
                </label>
                <Input
                  name="degree"
                  value={education.degree}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  Major
                </label>
                <Input
                  name="major"
                  value={education.major}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  Start Date
                </label>
                <Input
                  name="startDate"
                  type="date"
                  value={education.startDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div>
                <label className="text-xs" htmlFor="#">
                  End Date
                </label>
                <Input
                  name="endDate"
                  type="date"
                  value={education.endDate}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>

              <div className="col-span-2">
                <label className="text-xs" htmlFor="#">
                  Description
                </label>
                <Textarea
                  name="description"
                  value={education.description}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={addNewEducation}
            className="text-primary"
          >
            + Add More Education
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={removeEducation}
            className="text-primary"
            disabled={educationList.length <= 1}
          >
            - Remove Education
          </Button>
        </div>

        <Button type="button" onClick={onSave} disabled={loading}>
          {loading ? <Loader2 className="animate-spin" /> : "Save"}
        </Button>
      </div>
    </div>
  );
};

export default Education;
