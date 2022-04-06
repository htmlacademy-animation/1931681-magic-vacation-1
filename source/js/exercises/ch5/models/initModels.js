import {
  ObjectTypes,
  ModelsPool,
  AllModels,
  setModelDefinition
} from "./misc";

import {OBJ} from "./OBJ/loader";
import {GLTF} from "./GLTF/loader";

async function initModels() {
  await Promise.all(AllModels.map(async (modelId) => {
    const modelDescriptor = ModelsPool[modelId];
    const loader = getLoader(modelDescriptor.type);

    setModelDefinition(modelId, await loader(modelDescriptor.path));
  }));
}

function getLoader(modelType) {
  switch (modelType) {
    case ObjectTypes.OBJ:
      return OBJ;
    case ObjectTypes.GLTF:
      return GLTF;
    default:
      return noopLoader;
  }
}

async function noopLoader() {
  return new Promise((resolve) => resolve(null));
}

export {initModels};
