// import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// import fs from "fs";
// import { buildProductAnalyzerPrompt } from "./productAnalyzerPrompt.js";

// dotenv.config();

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// export async function analyzeProduct(imagePath) {
//   const imageBuffer = fs.readFileSync(imagePath);

//   const prompt = buildProductAnalyzerPrompt();

//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: [
//       {
//         inlineData: {
//           mimeType: "image/jpeg",
//           data: imageBuffer.toString("base64"),
//         },
//       },
//       {
//         text: prompt,
//       },
//     ],
//   });

// //   return response.text;
// const cleanText = response.text
//   .replace(/```json/g, "")
//   .replace(/```/g, "")
//   .trim();

// return JSON.parse(cleanText);
// }


import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import fs from "fs";
import { buildProductAnalyzerPrompt } from "./productAnalyzerPrompt.js";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

/**
 * ============================================
 * STEP 1
 * Analyze Product Image
 * Input  : Image
 * Output : Product JSON
 * ============================================
 */
export async function analyzeProduct(imagePath) {
  const imageBuffer = fs.readFileSync(imagePath);

  const prompt = buildProductAnalyzerPrompt();

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: imageBuffer.toString("base64"),
        },
      },
      {
        text: prompt,
      },
    ],
  });

  const cleanText = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanText);
}

/**
 * ============================================
 * STEP 2
 * Generate UGC Monologue
 * Input  : Prompt
 * Output : Monologue JSON
 * ============================================
 */
export async function generateMonologue(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  const cleanText = response.text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanText);
}