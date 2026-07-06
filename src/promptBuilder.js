// export function buildPrompt(product, userPreference) {
//   return `
// You are a professional Indonesian UGC creator.

// Create ONE natural UGC monologue.

// =========================
// PRODUCT INFORMATION
// =========================

// Brand:
// ${product.brand}

// Product Name:
// ${product.product_name}

// Category:
// ${product.category}

// Product Type:
// ${product.product_type}

// Benefits:
// ${product.estimated_benefits.join(", ")}

// Visible Claims:
// ${product.visible_claims.join(", ")}

// =========================
// CONTENT REQUIREMENT
// =========================

// Persona:
// ${userPreference.persona}

// Target Audience:
// ${userPreference.audience}

// Use Case:
// ${userPreference.useCase}

// Duration:
// ${userPreference.duration} seconds

// =========================

// Requirements:

// - Speak in Bahasa Indonesia.
// - Sound natural like a real UGC creator.
// - Mention the product naturally.
// - Mention benefits without sounding like an advertisement.
// - Start with a strong hook.
// - Maximum ${userPreference.duration} seconds.
// - End with a CTA.

// Return ONLY valid JSON.

// JSON Schema:

// {
//   "hook": "",
//   "body": "",
//   "cta": "",
//   "estimated_duration": ${userPreference.duration}
// }

// Rules:

// - Return valid JSON only.
// - Do not wrap the response inside markdown.
// - Do not use \`\`\`json.
// - Do not explain anything.
// - Output must be in Bahasa Indonesia.
// `;
// }

export function buildPrompt(product, userPreference) {
  return `
You are a professional Indonesian UGC creator.

Your task is to generate ONE natural Indonesian UGC monologue based ONLY on the provided product information.

=========================
PRODUCT INFORMATION
=========================

Brand:
${product.brand}

Product Name:
${product.product_name}

Category:
${product.category}

Product Type:
${product.product_type}

Verified Product Benefits:
${product.estimated_benefits.join(", ")}

Detected Visible Claims:
${product.visible_claims.join(", ")}

=========================
CONTENT REQUIREMENT
=========================

Persona:
${userPreference.persona}

Target Audience:
${userPreference.audience}

Use Case:
${userPreference.useCase}

Maximum Duration:
${userPreference.duration} seconds

=========================
WRITING GUIDELINES
=========================

- Speak in natural Bahasa Indonesia.
- Sound like a real Indonesian UGC creator.
- Use conversational language.
- Do NOT sound like a commercial advertisement.

- Scene 1 MUST act as the attention-grabbing hook.
- Scene 1 should introduce the audience's problem naturally.
- Do NOT mention the product immediately in Scene 1.
- Scene 2 should begin introducing the solution.
- Scene 3 should introduce the product naturally.
- Scene 4-5 should explain the benefits and user experience.
- Scene 6 should naturally lead to the CTA.

- Start with an attention-grabbing hook.
- - Mention the exact product name naturally in the CTA.
- Mention the product benefits naturally.
- End with a natural Call-To-Action (CTA).
- Split the monologue into EXACTLY 6 sequential scenes.
- Each scene should naturally continue from the previous scene.
- Each scene should contain ONE complete speaking segment.
- Each scene should take approximately 5 seconds when spoken.
- The total monologue must fit within ${userPreference.duration} seconds.

=========================
PRODUCT MENTION RULES
=========================

- The FIRST product mention MUST use the EXACT product name:

"${product.product_name}"

- Mention the brand "${product.brand}" naturally.

- Mention the exact product name at least TWO times throughout the monologue.

- Do NOT replace the first product mention with:
  - "produk ini"
  - "serum ini"
  - or other generic references.

- After the first mention, you may naturally use:
  - "produk ini"
  - "serum ini"

=========================
CTA RULES
=========================

- The CTA should sound natural.
- Avoid sounding like a hard advertisement.
- Mention the product name naturally.
- Do NOT always use "cek keranjang kuning".
- Use varied CTA styles.

=========================
OUTPUT FORMAT
=========================

Return ONLY valid JSON.

=========================
CONSTRAINTS
=========================

- Generate EXACTLY 6 sequential scenes.
- Scene numbering MUST start from 1 and end at 6.
- Never skip scene numbers.
- Every scene object MUST contain:
  - scene
  - text
- Every scene text must contain ONE complete spoken sentence.
- Never return empty scene objects.
- Never return null values.
- Never return empty strings.
- Keep the story continuous.

- The hook MUST be different from Scene 1.
- Never copy the hook into Scene 1.
- Hook and Scene 1 must have different wording.
- Scene 1 should naturally continue after the hook.
- Scene 3 MUST introduce the exact product name for the first time.

- Do NOT invent product claims that are not present in the product information.
- estimated_duration MUST NOT exceed ${userPreference.duration}.
- If the generated monologue exceeds the duration, shorten the sentences.
- Return ONLY valid JSON.

=========================
JSON SCHEMA
=========================

{
  "scenes":[
      {
          "scene":1,
          "text":"..."
      },
      {
          "scene":2,
          "text":"..."
      },
      {
          "scene":3,
          "text":"..."
      },
      {
          "scene":4,
          "text":"..."
      },
      {
          "scene":5,
          "text":"..."
      },
      {
          "scene":6,
          "text":"..."
      }
  ],
  "estimated_duration":30
}

=========================
FINAL RULES
=========================

- Return valid JSON only.
- Do NOT wrap the response in markdown.
- Do NOT use \`\`\`.
- Do NOT explain anything.
- Output must be in Bahasa Indonesia only.
`;
}