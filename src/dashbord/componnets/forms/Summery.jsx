import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { generateResumeContent } from "../../../../service/AIModel";
import { useFirestore } from "@/hooks/Firestore";
import { useParams } from "react-router-dom";
import { Loader2 } from 'lucide-react'
import { toast } from "sonner";

const Summery = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState(resumeInfo?.summery || "");
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { resumeId } = useParams();

  const { updateDocument } = useFirestore("UserResumes");

  useEffect(() => {
    if (resumeInfo?.summery && !summary) {
      setSummary(resumeInfo.summery);
    }
  }, [resumeInfo]);

  useEffect(() => {
    summary && setResumeInfo({ ...resumeInfo, summery: summary });
  }, [summary]);

  const generateSummary = async () => {
    if (!resumeInfo?.jobTitle) {
      alert("Please enter your job title first.");
      return;
    }
    setLoading(true);
    console.log("Generating summary for:", resumeInfo.jobTitle);
    const prompt = `job Title: ${resumeInfo.jobTitle}, 
    Generate 3 resume summaries for different experience levels (Fresher, Mid-Level, Experienced) in JSON format. 
    Return an object with a 'resumeSummaries' array where each item has:
    - experienceLevel: string (one of "Fresher", "Mid-Level", "Experienced")
    - summary: string (4-5 line summary for this experience level)`;

    console.log("Prompt sent to AI:", prompt);

    const toastId = toast.loading("Generating AI summaries...");
    try {
      const result = await generateResumeContent(prompt);
      console.log("AI Response:", result);

      if (result) {


        if (result.startsWith("Error:")) {
          setAiErrorMessage(
            "AI summary is temporarily unavailable. Please enter your summary manually. Sorry for the inconvenience."
          );
          toast.error("AI Summary is currently unavailable", { id: toastId });
          setLoading(false);
          return;
        }


        let parsedResult;
        try {
          // Try to clean the result if it contains markdown code blocks
          const cleanedResult = result.replace(/```json|```/g, "").trim();
          parsedResult = JSON.parse(cleanedResult);
        } catch (parseError) {
          console.log("Failed to parse JSON, treating as plain text fallback");
          // If JSON parsing fails, create a single suggestion from the raw text
          parsedResult = {
            resumeSummaries: [
              {
                experienceLevel: "Suggested",
                summary: result
              }
            ]
          };
        }

        if (parsedResult.resumeSummaries && Array.isArray(parsedResult.resumeSummaries)) {
          setAiGeneratedSummaryList(parsedResult.resumeSummaries);
          toast.success("Suggestions generated!", { id: toastId });
        } else {
          toast.error("Failed to generate summaries. Try again.", { id: toastId });
        }
      } else {
        toast.error("No response from AI. Check your API key or model availability.", { id: toastId });
      }
    } catch (error) {
      console.error("Failed to generate summary:", error);
      toast.error("An error occurred. Check console.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const onSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateDocument(resumeId, { summery: summary });
      enableNext(true);
      toast.success("Summary updated!", {
        description: "Your professional summary has been saved successfully."
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to save summary");
    } finally {
      setLoading(false);
    }
  };

  const handleUseSummary = (summaryText) => {
    setSummary(summaryText);
  };

  return (
    <div>
      <div className="p-5 shadow-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Summary</h2>
        <p>Add Summary for your jobTitle</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label htmlFor="#">Add Summary</label>
            <Button
              type="button"
              variant="outline"
              onClick={generateSummary}
              className="border-primary text-primary cursor-pointer"
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <Brain className="h-4 w-4" />
              )}
              Generate from AI
            </Button>
          </div>
          <Textarea
            required
            className="mt-5"
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
            placeholder="Enter your professional summary or generate one using AI"
          />

          <div className="mt-2 flex justify-end">
            <Button>Save</Button>
          </div>
        </form>
      </div>

      {/* Summary List Suggestion */}
      {aiGeneratedSummaryList.length > 0 && (
        <div className="my-2">
          <h2 className="font-bold text-lg">Suggestions</h2>

          {aiGeneratedSummaryList.map((item, index) => (
            <div key={index} className="shadow-lg py-3 px-3 my-2">
              <h2 className="font-bold my-1">Level: {item.experienceLevel}</h2>
              <p className="text-xs text-gray-800 mb-2">{item.summary}</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => handleUseSummary(item.summary)}
              >
                Use This Summary
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Summery;
