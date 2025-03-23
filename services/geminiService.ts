import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "@env";

export async function askGemini(prompt: string): Promise<string> {
  try {
    if (!prompt.trim()) {
      throw new Error("Prompt cannot be empty");
    }

    if (!GEMINI_API_KEY) {
      throw new Error("Gemini API key is not configured");
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const generationConfig = {
      temperature: 0.4,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    };

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });

    const response = result.response;
    return response.text();
  } catch (error: any) {
    if (
      error?.message?.includes("quota") ||
      error?.message?.includes("rate limit")
    ) {
      console.error("Gemini API quota exceeded:", error);
      return "Error: API quota exceeded. Please check your Gemini API key usage.";
    }

    console.error("Gemini API error:", error);
    return `Error: ${error.message || "Unknown error occurred"}`;
  }
}

export async function analyzeJournalEmotion(journalText: string): Promise<{
  score: number;
  explanation: string;
}> {
  try {
    if (!journalText.trim()) {
      throw new Error("Journal text cannot be empty");
    }

    const analysisPrompt = `
      Analyze the following journal entry for emotional content. 
      Rate the overall emotional tone on a scale from -2 to 2, where:
      -2 = Very negative (severely distressed, hopeless)
      -1 = Somewhat negative (sad, anxious, frustrated)
       0 = Neutral (balanced, neither positive nor negative)
       1 = Somewhat positive (content, satisfied, hopeful)
       2 = Very positive (joyful, enthusiastic, optimistic)
      
      Provide your response in the following format:
      SCORE: [number between -2 and 2]
      EXPLANATION: [brief explanation of your rating]
      
      Journal entry: "${journalText}"
    `;

    const response = await askGemini(analysisPrompt);

    const scoreMatch = response.match(/SCORE:\s*(-?\d+)/i);
    const explanationMatch = response.match(/EXPLANATION:\s*(.*?)(\n|$)/i);

    let score = 0;
    let explanation = "Unable to determine emotional content.";

    if (scoreMatch && scoreMatch[1]) {
      score = Math.max(-2, Math.min(2, parseInt(scoreMatch[1], 10)));
    }

    if (explanationMatch && explanationMatch[1]) {
      explanation = explanationMatch[1].trim();
    }

    return { score, explanation };
  } catch (error: any) {
    console.error("Error analyzing journal emotion:", error);
    return {
      score: 0,
      explanation: `Error analyzing emotion: ${
        error.message || "Unknown error"
      }`,
    };
  }
}
