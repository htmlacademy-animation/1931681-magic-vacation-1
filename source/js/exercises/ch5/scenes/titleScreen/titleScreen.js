import * as THREE from 'three';

import { makeKeyhole } from './objects/keyhole';
import { makeFlamingo } from './objects/flamingo';
import { makeSnowflake } from './objects/snowflake';
import { makeQuestionMark } from './objects/questionMark';
import { makeLeaf } from './objects/leaf';

async function titleScreen() {
    const group = new THREE.Group();

    group.add(makeKeyhole());
    group.add(makeFlamingo());
    group.add(makeSnowflake());
    group.add(makeQuestionMark());
    group.add(makeLeaf());

    return function renderScreen() {
        return group;
    };
}

export { titleScreen }; 
