
import { GoogleGenAI } from "@google/genai";

async function test() {
    const apiKey = "xxxxxxxxxxxxxx";

    try {
        const ai = new GoogleGenAI({
            apiKey: apiKey,
        });

        const modelId = "gemini-2.0-flash-001";
        const prompt = "Say hello";

        console.log("Starting generation...");
        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt
        });

        console.log("Response text:", response.text);
    } catch (error) {
        console.error("Full Error:", error);
    }
}

test();
