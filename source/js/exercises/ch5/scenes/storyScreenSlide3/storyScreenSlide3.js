import * as THREE from 'three';

import { makeSnowman } from './objects/snowman';
import { makeRoad } from './objects/road/road';

async function storyScreenSlide3() {
    const group = new THREE.Group();

    group.add(makeSnowman());
    group.add(makeRoad());

    return function renderScreen() {
        return group;
    };
}

export { storyScreenSlide3 }; 
