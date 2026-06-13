import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function evaluateWithGemini(
  hypothesis: string
) {
  const prompt = `
You are a professional engineering failure investigator.

Analyze the hypothesis.

Return ONLY JSON.

{
  "score": number,
  "confidence": number,
  "rootCause": string,

  "strengths": ["..."],
  "weaknesses": ["..."],

  "rootCauseNodes": [
    "Cause 1",
    "Cause 2",
    "Cause 3",
    "Final Failure"
  ],

  "timeline": [
    "Event 1",
    "Event 2",
    "Event 3",
    "Event 4"
  ]
}
`;

  const result =
    await model.generateContent(prompt);

  const text =
    result.response.text();

  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedText);
}