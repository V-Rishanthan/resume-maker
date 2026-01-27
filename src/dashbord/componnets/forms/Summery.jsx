import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { generateResumeContent } from "../../../../service/AIModel";

const Summery = () => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState("");
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (summary) {
      setResumeInfo({ ...resumeInfo, summery: summary });
    }
  }, [summary]);

  const generateSummary = async () => {
    if (!resumeInfo?.jobTitle) {
      alert("Please enter your job title first.");
      return;
    }
    setLoading(true);
    const prompt = `job Title: ${resumeInfo.jobTitle}, 
    Generate 3 resume summaries for different experience levels (Fresher, Mid-Level, Experienced) in JSON format. 
    Return an object with a 'resumeSummaries' array where each item has:
    - experienceLevel: string (one of "Fresher", "Mid-Level", "Experienced")
    - summary: string (4-5 line summary for this experience level)`;

    try {
      const result = await generateResumeContent(prompt);
      console.log("AI Response:", result);

      if (result) {
        try {
          const parsedResult = JSON.parse(result);
          // Check if the response has the expected structure
          if (
            parsedResult.resumeSummaries &&
            Array.isArray(parsedResult.resumeSummaries)
          ) {
            setAiGeneratedSummaryList(parsedResult.resumeSummaries);
          } else {
            console.error("Unexpected response structure:", parsedResult);
            setAiGeneratedSummaryList([]);
          }
        } catch (parseError) {
          console.error("Error parsing JSON: ", parseError);
          setAiGeneratedSummaryList([]);
        }
      } else {
        setAiGeneratedSummaryList([]);
      }
    } catch (error) {
      console.error("Failed to generate summary:", error);
      setAiGeneratedSummaryList([]);
    } finally {
      setLoading(false);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
  };

  const handleUseSummary = (summaryText) => {
    setSummary(summaryText);
    setResumeInfo({ ...resumeInfo, summery: summaryText });
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
