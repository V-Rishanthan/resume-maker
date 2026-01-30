
import { GoogleGenAI } from "@google/genai";

async function listModels() {
    const apiKey = "xxxxxxxxxxxxx";

    try {
        const ai = new GoogleGenAI({
            apiKey: apiKey,
        });

        console.log("Listing models...");
        const models = await ai.models.list();
        console.log("Available models:");
        models.forEach(m => console.log(m.name));
    } catch (error) {
        console.error("Error listing models:", error);
    }
}

listModels();
