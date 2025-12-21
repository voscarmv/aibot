import { OpenAiClient } from "@voscarmv/aichatbot";
import "dotenv/config";
import { functions, tools } from "./tools.js";
import { currentDate } from "./utils/instructions.js";
if (!process.env.DEEPSEEK_KEY) {
    throw new Error("DEEPSEEK_KEY is not defined");
}
export const aiClient = new OpenAiClient({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_KEY,
    model: 'deepseek-chat',
    instructions: 'You are a helpful assistant.',
    tools,
    functions,
    additionalInstructions: currentDate,
});

