import * as THREE from 'three';

import { makePyramid } from './objects/pyramid';
import { makeBigLeaf } from './objects/bigLeaf';
import { makeSmallLeaf } from './objects/smallLeaf';
import { makeStreetLight } from './objects/streetLight';

async function storyScreenSlide2() {
    const group = new THREE.Group();

    group.add(makePyramid());
    group.add(makeBigLeaf());
    group.add(makeSmallLeaf());
    group.add(makeStreetLight());

    return function renderScreen(time) {
        return group;
    };
}

export { storyScreenSlide2 }; 
