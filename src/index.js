import { analyzeProduct, generateMonologue } from "./gemini.js";
import { buildPrompt } from "./promptBuilder.js";
import { buildScenePlan } from "./scenePlanner.js";

async function main() {
  try {
    const product = await analyzeProduct("./dataset/test.jpg");

    const userPreference = {
      persona: "Beauty Influencer",
      audience: "Wanita usia 20-30 tahun",
      useCase: "Review skincare harian",
      duration: 30,
    };

    const prompt = buildPrompt(product, userPreference);

    const monologue = await generateMonologue(prompt);

    const scenePlan = buildScenePlan(product, monologue);

    console.log(monologue);
    console.log(scenePlan);

  } catch (error) {
    console.error("Pipeline Error:", error);
  }
}

main();