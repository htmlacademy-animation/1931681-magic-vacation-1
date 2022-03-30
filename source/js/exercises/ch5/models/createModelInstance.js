import { ObjectTypes, ModelsPool } from './misc';

import { OBJ } from './OBJ/makeMesh';
import { GLTF } from './GLTF/makeMesh';

function createModelInstance(modelId, ...args) {
    let instanceMaker;
    const modelType = ModelsPool[modelId].type;
    
    switch(modelType) {
        case ObjectTypes.OBJ:
            instanceMaker = OBJ;
            break;
        case ObjectTypes.GLTF:
            instanceMaker = GLTF;
            break;
        default:
            console.warn(`Unknown modelType: ${modelType}`);
            instanceMaker = noopInstanceMaker;
            break;
    }

    return instanceMaker(ModelsPool[modelId].definition, ...args);
}

function noopInstanceMaker() {
    return null;
}

export { createModelInstance };
