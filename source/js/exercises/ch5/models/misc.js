const ObjectTypes = {
    OBJ: 'obj',
    GLTF: 'gltf'
};

const AIRPLANE_ID = 'airplane';

const WATERMELON_ID = 'watermelon';
const SUITCASE_ID = 'suitcase';

const AllModels = [
    AIRPLANE_ID, WATERMELON_ID, SUITCASE_ID
];

const ModelsPool = {
    [AIRPLANE_ID]: {
        path: '3d/module-6/scene-0-objects/airplane.obj',
        type: ObjectTypes.OBJ,
        definition: null
    },
    [WATERMELON_ID]: {
        path: '3d/module-6/scene-0-objects/watermelon.gltf',
        type: ObjectTypes.GLTF,
        definition: null
    },
    [SUITCASE_ID]: {
        path: '3d/module-6/scene-0-objects/suitcase.gltf',
        type: ObjectTypes.GLTF,
        definition: null
    }
};

function setModelDefinition(modelId, definition) {
    ModelsPool[modelId].definition = definition;
}

export {
    AIRPLANE_ID,
    WATERMELON_ID,
    SUITCASE_ID,
    AllModels,
    ObjectTypes,
    ModelsPool,
    setModelDefinition
};
