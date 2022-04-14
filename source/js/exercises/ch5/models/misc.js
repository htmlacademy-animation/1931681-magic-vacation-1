const ObjectTypes = {
  OBJ: `obj`,
  GLTF: `gltf`
};

const AIRPLANE_ID = `airplane`;
const SCENE_WALLS = `sceneWalls`;

const WATERMELON_ID = `watermelon`;
const SUITCASE_ID = `suitcase`;
const DOG_ID = `dog`;
const COMPASS_ID = `compass`;
const SONYA_ID = `sonya`;

const SCENE1_CONTENT = `scene1Content`;
const SCENE2_CONTENT = `scene2Content`;
const SCENE3_CONTENT = `scene3Content`;
const SCENE4_CONTENT = `scene4Content`;

const AllModels = [
  AIRPLANE_ID, SCENE_WALLS,
  WATERMELON_ID, SUITCASE_ID, DOG_ID, COMPASS_ID, SONYA_ID,
  SCENE1_CONTENT, SCENE2_CONTENT, SCENE3_CONTENT, SCENE4_CONTENT
];

const ModelsPool = {
  [AIRPLANE_ID]: {
    path: `3d/module-6/scene-0-objects/airplane.obj`,
    type: ObjectTypes.OBJ,
    definition: null
  },
  [SCENE_WALLS]: {
    path: `3d/module-6/rooms-scenes/common/WallCornerUnit.obj`,
    type: ObjectTypes.OBJ,
    definition: null
  },

  [WATERMELON_ID]: {
    path: `3d/module-6/scene-0-objects/watermelon.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },
  [SUITCASE_ID]: {
    path: `3d/module-6/scene-0-objects/suitcase.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },
  [DOG_ID]: {
    path: `3d/module-6/rooms-scenes/objects/dog.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },
  [COMPASS_ID]: {
    path: `3d/module-6/rooms-scenes/objects/compass.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },
  [SONYA_ID]: {
    path: `3d/module-6/rooms-scenes/objects/sonya.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },

  [SCENE1_CONTENT]: {
    path: `3d/module-6/rooms-scenes/scenesStatic/scene1-static-output-1.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },
  [SCENE2_CONTENT]: {
    path: `3d/module-6/rooms-scenes/scenesStatic/scene2-static-output-1.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },
  [SCENE3_CONTENT]: {
    path: `3d/module-6/rooms-scenes/scenesStatic/scene3-static-output-1.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },
  [SCENE4_CONTENT]: {
    path: `3d/module-6/rooms-scenes/scenesStatic/scene4-static-output-1.gltf`,
    type: ObjectTypes.GLTF,
    definition: null
  },
};

function setModelDefinition(modelId, definition) {
  ModelsPool[modelId].definition = definition;
}

export {
  AIRPLANE_ID, SCENE_WALLS,
  WATERMELON_ID, SUITCASE_ID, DOG_ID, COMPASS_ID, SONYA_ID,
  SCENE1_CONTENT, SCENE2_CONTENT, SCENE3_CONTENT, SCENE4_CONTENT,
  AllModels,
  ObjectTypes,
  ModelsPool,
  setModelDefinition
};
