// export function buildScenePlan(product, monologue) {
//   return monologue.scenes.map((scene) => ({
//     scene: scene.scene,
//     duration: 5,
//     voice: scene.text,
//   }));
// }


export function buildScenePlan(product, monologue) {
  const sceneConfigs = {
    1: {
      camera: "close-up",
      expression: "concerned",
      action: "looking at camera",
      background: "bedroom",
    },
    2: {
      camera: "medium shot",
      expression: "thinking",
      action: "touching face",
      background: "bedroom",
    },
    3: {
      camera: "medium shot",
      expression: "smile",
      action: `holding ${product.product_type.toLowerCase()}`,
      background: "vanity table",
    },
    4: {
      camera: "close-up",
      expression: "happy",
      action: `applying ${product.product_type.toLowerCase()}`,
      background: "bathroom",
    },
    5: {
      camera: "close-up",
      expression: "confident",
      action: "showing skin result",
      background: "bedroom",
    },
    6: {
      camera: "medium shot",
      expression: "smile",
      action: `pointing to ${product.product_name}`,
      background: "bedroom",
    },
  };

  return monologue.scenes.map((scene) => ({
    scene: scene.scene,
    duration: 5,
    voice: scene.text,
    ...sceneConfigs[scene.scene],
  }));
}