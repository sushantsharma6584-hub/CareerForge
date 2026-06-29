import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "career-forge", // Unique app ID
  name: "Career Forge",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
