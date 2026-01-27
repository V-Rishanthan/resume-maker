import { GoogleGenAI } from "@google/genai";

async function generateResumeContent(prompt) {
  try {
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_GOOGLE_AI_API_KEY,
    });

    const config = {
      responseMimeType: "application/json",
    };

    const model = "gemini-1.5-flash";
    const contents = [
      {
        role: "user",
        parts: [
          {
            text: prompt,
          },
        ],
      },
    ];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fullResponse = "";
    for await (const chunk of response) {
      fullResponse += chunk.text;
    }

    return fullResponse || ""; // Ensure we return a string
  } catch (error) {
    console.error("Error generating summary:", error);
    return ""; // Return an empty string
  }
}

export { generateResumeContent };
