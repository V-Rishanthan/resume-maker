import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import React, { useContext, useState, useEffect } from "react";
import Editor, {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { generateResumeContent } from "../../../service/AIModel";

const PROMPT_TEMPLATE = `position title: {positionTitle}, 
Generate 5-7 bullet points for my experience in resume.
Return a JSON object with:
- positionTitle: string
- bulletPoints: array of strings (each string is a bullet point)`;

const RichTextEditor = ({ onRishTextEditorChanges, index, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "");
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (defaultValue && !value) {
      setValue(defaultValue)
    }
  }, [defaultValue])

  const generateSummaryFromAI = async () => {
    setLoading(true);
    if (!resumeInfo?.experience[index]?.title) {
      console.log("Please Add position title");
      return;
    }

    const prompt = PROMPT_TEMPLATE.replace(
      "{positionTitle}",
      resumeInfo?.experience[index]?.title
    );

    try {
      const result = await generateResumeContent(prompt);
      if (result) {
        try {
          const parsedResult = JSON.parse(result);

          // Convert bullet points to HTML list
          if (
            parsedResult.bulletPoints &&
            Array.isArray(parsedResult.bulletPoints)
          ) {
            const htmlContent = parsedResult.bulletPoints
              .map((point) => `<li>${point}</li>`)
              .join("");
            const fullHtml = `<ul>${htmlContent}</ul>`;

            setValue(fullHtml);
            onRishTextEditorChanges({ target: { value: fullHtml } });
          } else {
            console.error("Unexpected response format - bulletPoints missing");
          }
        } catch (parseError) {
          console.error("Error parsing JSON response:", parseError);
          // Fallback to raw result if JSON parsing fails
          setValue(result);
          onRishTextEditorChanges({ target: { value: result } });
        }
      } else {
        console.error("No content generated from AI");
      }
    } catch (error) {
      console.error("Failed to generate summary:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label htmlFor="#" className="text-xs">
          Summary
        </label>
        <Button
          onClick={generateSummaryFromAI}
          variant="outline"
          size="sm"
          className="flex gap-2 cursor-pointer border-primary text-primary"
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

      <Editor
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onRishTextEditorChanges(e);
        }}
      >
        <Toolbar>
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnStrikeThrough />
          <Separator />
          <BtnNumberedList />

          <BtnBulletList />
          <Separator />
        </Toolbar>
      </Editor>
    </div>
  );
};

export default RichTextEditor;
