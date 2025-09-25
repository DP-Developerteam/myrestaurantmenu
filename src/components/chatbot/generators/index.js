// src/components/chatbot/generators/index.js
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("API Key loaded?", import.meta.env.VITE_GEMINI_API_KEY);

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
let genAI = null;

if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
}

const MODEL = "gemini-2.0-flash-lite";

let requestCount = 0;
const MAX_REQUESTS_PER_SESSION = 10;

console.log('requestCount', requestCount);

// Rule-based fallback (simple, safe)
export async function paraphraseRuleBased(text) {
    return `🤖 ${text}`;
}

// Gemini-powered paraphrase (optional)
export async function paraphraseGemini(prompt, history = []) {
    if (!genAI) {
        console.error("API Key not found. Using rule-based fallback.");
        return paraphraseRuleBased(prompt);
    }

    if (requestCount >= MAX_REQUESTS_PER_SESSION) {
        console.warn("API usage limit reached. Falling back to rule-based.");
        return 'No hay más charla con la IA - esto no es el patio del recreo.'
    }

    try {
        requestCount++;
        const model = genAI.getGenerativeModel({ model: MODEL });
        // Build message context ####
        const contents = [
            {
                role: "user",
                parts: [{
                text: "Instruction: Always give concise answers (max 2-3 sentences)." +
                        "Focus only on conclusions. " +
                        "If you are not sure or lack info, reply with 'I don’t know', or something similar, to make the conversation flow." +
                        "Diego Pérez Rodríguez, founder MyRestaurantMenu. contact@myrestaurantmenu.com. Don't provide contact details unless is requested. If it is requested, you can give the email address"
                }]
            },
            ...history.map(m => ({
                role: m.role === 'user' ? 'user' : 'model',
                parts: [{ text: m.text }]
            })),
            { role: "user", parts: [{ text: prompt }] }
        ];

        // const result = await model.generateContent(prompt);
        const result = await model.generateContent({
            // contents: [{ role: "user", parts: [{ text: prompt }] }],
            contents,
            generationConfig: {
                maxOutputTokens: 60, // ⬅️ hard limit on length
                temperature: 0.0,     // tweak for more/less creativity
                topP: 0.1,             // focused, avoids rambling
            },
        });
        const responseText = result?.response?.text();
        return responseText ? responseText : "Sorry, I couldn't generate a response. Please try again.";
    } catch (err) {
        console.error("Gemini error:", err);
        return "An error occurred while connecting to the AI. Please try again later.";
    }
}
