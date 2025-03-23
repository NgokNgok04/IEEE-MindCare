import OpenAI from "openai";
import { OPENAI_API_KEY } from "@env";

export async function askOpenAI(prompt: string): Promise<string> {
  try {
    if (!prompt.trim()) {
      throw new Error("Prompt cannot be empty");
    }

    if (!OPENAI_API_KEY) {
      throw new Error("OpenAI API key is not configured");
    }

    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
    });

    return response.choices[0]?.message.content || "No response received";
  } catch (error: any) {
    if (error?.message?.includes("429") || error?.message?.includes("quota")) {
      console.error("OpenAI API quota exceeded:", error);
      return "Error: API quota exceeded. Please check your OpenAI account billing details.";
    }

    console.error("OpenAI API error:", error);
    return `Error: ${error.message || "Unknown error occurred"}`;
  }
}
