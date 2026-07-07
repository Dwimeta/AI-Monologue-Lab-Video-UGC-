// export function buildVideoPrompt(product, scene) {
//   return `
// Create a realistic User Generated Content (UGC) video.

// Character:
// A young Indonesian woman.

// Product:
// ${product.brand} ${product.product_name}

// Category:
// ${product.category}

// Scene ${scene.scene}

// Camera:
// ${scene.camera}

// Expression:
// ${scene.expression}

// Action:
// ${scene.action}

// Background:
// ${scene.background}

// Dialogue:
// "${scene.voice}"

// Video Style:
// - realistic UGC
// - smartphone camera
// - vertical 9:16
// - photorealistic
// - natural lighting
// - cinematic
// - smooth camera movement
// - high quality
// - natural facial expression
// - authentic social media content
// `;
// }


function buildCharacter() {
  return `
========================
CHARACTER
========================

A young Indonesian woman.

Age around 23–28 years old.

Natural makeup.

Healthy glowing skin.

Long black hair.

Friendly smile.

Beauty content creator.

Speaking naturally to a smartphone camera.
`;
}

function buildProduct(product) {
  return `
========================
PRODUCT
========================

Brand:
${product.brand}

Product:
${product.product_name}

Category:
${product.category}

Product Type:
${product.product_type}
`;
}

function buildScene(scene) {
  return `
========================
SCENE
========================

Scene:
${scene.scene}

Background:
${scene.background}

Camera:
${scene.camera}

Duration:
${scene.duration} seconds

Expression:
${scene.expression}
`;
}

function buildAction(scene) {
  return `
========================
ACTION
========================

${scene.action}
`;
}

function buildDialogue(scene) {
  return `
========================
DIALOGUE
========================

"${scene.voice}"
`;
}

function buildVisualStyle() {
  return `
========================
VISUAL STYLE
========================

- Realistic User Generated Content (UGC)
- Smartphone camera
- Vertical 9:16
- Photorealistic
- Beauty influencer aesthetic
- Soft natural daylight
- Smooth handheld camera movement
- Natural facial expression
- High quality skin texture
- Ultra realistic
- Cinematic lighting
- Highly detailed
`;
}

function buildTechnicalSpec() {
  return `
========================
TECHNICAL SPECIFICATION
========================

- 4K quality
- HDR
- Realistic shadows
- Realistic skin texture
- Natural lip sync
- Smooth motion
- Consistent character appearance
- Consistent product appearance
`;
}

export function buildVideoPrompt(product, scene) {
  return `
Create a realistic User Generated Content (UGC) video.

${buildCharacter()}

${buildProduct(product)}

${buildScene(scene)}

${buildAction(scene)}

${buildDialogue(scene)}

${buildVisualStyle()}

${buildTechnicalSpec()}
`.trim();
}