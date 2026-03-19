import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function translate() {
  const prompt = `
    I have a React app for a company called VGOIRE. 
    I need to translate the following services into 18 languages.
    Languages: en, es, pt, zh, he, ar, ru, ro, nl, no, hi, ja, fr, it, de, ko, fi, el.
    
    Services:
    1. TRANSLATIONS: Certified translation services in many languages.
    2. TRAVEL: Domestic and international flights.
    3. HOTEL BOOKINGS: Best hotels with exclusive rates.
    4. CAR RENTAL: Luxury and safe cars.
    5. CRUISES: Luxury cruises worldwide (Partner: Qualitours).
    6. LANGUAGE CLASSES: Online English and Spanish classes.
    7. EXAM TRAINING: Prep for DELE, IELTS, TOEFL, Duolingo.
    8. SUBTITLING: English, Spanish, Portuguese subtitles.
    9. CLIENT REVIEWS: Rate us on Google.
    10. APP UPDATES: Latest news and features.
    
    Format the output as a valid TypeScript object for the SERVICES array in constants.ts.
    Each service should have an 'id', 'icon', 'image', 'translations' (Record<Language, {title, description}>).
    Keep descriptions concise but professional.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: prompt,
  });

  console.log(response.text);
}

translate();
