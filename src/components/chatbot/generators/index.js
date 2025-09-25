// src/components/chatbot/generators/index.js
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("API Key loaded?", import.meta.env.VITE_GEMINI_API_KEY);

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
let genAI = null;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
}

const MODEL = "gemini-1.5-flash";

// Rule-based fallback (simple, safe)
export async function paraphraseRuleBased(text) {
    return `🤖 ${text}`;
}

// Gemini-powered paraphrase (optional)
export async function paraphraseGemini(prompt) {
    if (!genAI) {
        console.error("API Key not found. Using rule-based fallback.");
        return paraphraseRuleBased(prompt);
    }

    try {
        const model = genAI.getGenerativeModel({ model: MODEL });
        const result = await model.generateContent(prompt);
        const responseText = result?.response?.text();
        return responseText ? responseText : "Sorry, I couldn't generate a response. Please try again.";
    } catch (err) {
        console.error("Gemini error:", err);
        return "An error occurred while connecting to the AI. Please try again later.";
    }
}
