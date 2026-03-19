import { GoogleGenAI, Type } from "@google/genai";
import fs from "fs/promises";
import path from "path";

// Try different possible environment variables
const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;

if (!apiKey) {
  console.error("No API key found in environment variables.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
  { code: 'zh', name: 'Chinese' },
  { code: 'he', name: 'Hebrew' },
  { code: 'ar', name: 'Arabic' },
  { code: 'ru', name: 'Russian' },
  { code: 'ro', name: 'Romanian' },
  { code: 'nl', name: 'Dutch' },
  { code: 'no', name: 'Norwegian' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ja', name: 'Japanese' },
  { code: 'fr', name: 'French' },
  { code: 'it', name: 'Italian' },
  { code: 'de', name: 'German' },
  { code: 'ko', name: 'Korean' },
  { code: 'fi', name: 'Finnish' },
  { code: 'el', name: 'Greek' },
];

async function runTranslation() {
  try {
    const filePath = path.join(process.cwd(), "faq_data.json");
    const data = await fs.readFile(filePath, "utf-8");
    const faqData = JSON.parse(data);

    const englishItems = faqData.en.filter((item: any) => item.question || item.answer);
    console.log(`Found ${englishItems.length} English items to translate.`);

    const targetLangs = LANGUAGES.filter(l => l.code !== 'en');

    for (const lang of targetLangs) {
      console.log(`Translating to ${lang.name} (${lang.code})...`);
      
      const prompt = `Translate the following FAQ items from English to ${lang.name}.
      Return a JSON array of objects with "question" and "answer" fields.
      Maintain the same meaning and professional tone.
      
      Items:
      ${JSON.stringify(englishItems)}`;

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                question: { type: Type.STRING },
                answer: { type: Type.STRING }
              },
              required: ["question", "answer"]
            }
          }
        }
      });

      const translatedItems = JSON.parse(response.text);
      
      // Fill up to 45 slots
      const fullList = Array(45).fill(null).map((_, i) => {
        if (i < translatedItems.length) return translatedItems[i];
        return { question: "", answer: "" };
      });

      faqData[lang.code] = fullList;
      console.log(`Successfully translated to ${lang.code}`);
    }

    await fs.writeFile(filePath, JSON.stringify(faqData, null, 2));
    console.log("All translations completed and saved to faq_data.json");

  } catch (error) {
    console.error("Translation failed:", error);
  }
}

runTranslation();
