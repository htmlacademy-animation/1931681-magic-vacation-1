import * as THREE from 'three';

import { makeKeyholeBackPlane } from './objects/keyholeBackPlane';
import { makeKeyhole } from './objects/keyhole';
import { makeFlamingo } from './objects/flamingo';
import { makeSnowflake } from './objects/snowflake';
import { makeQuestionMark } from './objects/questionMark';
import { makeLeaf } from './objects/leaf';
import { makeSaturn } from './objects/saturn';

async function titleScreen() {
    const group = new THREE.Group();

    group.add(makeKeyholeBackPlane());
    group.add(makeKeyhole());
    group.add(makeFlamingo());
    group.add(makeSnowflake());
    group.add(makeQuestionMark());
    group.add(makeLeaf());
    group.add(makeSaturn());

    return function renderScreen() {
        return group;
    };
}

export { titleScreen }; 
