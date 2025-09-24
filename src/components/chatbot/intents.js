// src/components/chatbot/intents.js
import { useTranslation } from "react-i18next";

const patterns = {
    greeting: {
        en: /^(hi|hello|hey|good\s(morning|afternoon|evening))/i,
        es: /^(hola|buenas)/i,
        de: /^(hallo|guten\s(tag|morgen|abend))/i,
        fr: /^(salut|bonjour|bonsoir)/i,
        it: /^(ciao|buongiorno|buonasera)/i
    },
    thanks: {
        en: /\b(thank(s| you)|appreciate)\b/i,
        es: /\b(gracias|muchas gracias)\b/i,
        de: /\b(danke|vielen dank)\b/i,
        fr: /\b(merci)\b/i,
        it: /\b(grazie|mille grazie)\b/i
    },
    goodbye: {
        en: /(bye|goodbye|see you)/i,
        es: /(adios|hasta luego|nos vemos)/i,
        de: /(tsch(ü|u)ss|auf wiedersehen)/i,
        fr: /(au revoir|à bientôt)/i,
        it: /(arrivederci|a presto)/i
    },
    support: {
        en: /(support|help|need (help|support|assistance))/i,
        es: /(soporte|ayuda|necesito (ayuda|soporte))/i,
        de: /(hilfe|support)/i,
        fr: /(aide|support)/i,
        it: /(aiuto|supporto)/i
    }
};

export function useIntents() {
    const { t, i18n } = useTranslation();

    function detectIntent(message) {
        const lang = i18n.language?.split("-")[0] || "en";
        const text = message.toLowerCase();

        for (const [intent, rules] of Object.entries(patterns)) {
        const regex = rules[lang] || rules.en;
            if (regex.test(text)) {
                return { intent };
            }
        }
        return { intent: "unknown" };
    }

    function getIntentReply(intent) {
        const replies = t(`chatbot.intents.${intent}`, { returnObjects: true });
        if (Array.isArray(replies) && replies.length > 0) {
            return replies[Math.floor(Math.random() * replies.length)];
        }
        return null;
    }

    return { detectIntent, getIntentReply };
}
