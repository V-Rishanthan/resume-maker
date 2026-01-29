import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;

if (!apiKey) throw new Error("Missing VITE_GOOGLE_AI_API_KEY in .env file");

const genAI = new GoogleGenerativeAI(apiKey);

export const generateResumeContent = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({
      // Use a currently supported model from the Gemini models list
      model: "gemini-2.5-flash-lite",
      generationConfig: {
        responseMimeType: "application/json",
        temperature: 0.7,
      },
    });

    const result = await model.generateContent(prompt);

    // SDK returns text; with responseMimeType it's JSON text
    return result.response.text();
  } catch (error) {
    console.error("AI Generation Error:", error);
    return `Error: ${error?.message || "Unknown error"}`;
  }
};
