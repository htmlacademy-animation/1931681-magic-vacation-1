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

const StoryScreenSlide2SceneDescription = {
    cameraPosition: new THREE.Vector3(0, 0, 50),
    directionalLightPosition: new THREE.Vector3(-10, 50, 15),
    pointLight1Position: new THREE.Vector3(-50, -35, 25),
    pointLight2Position: new THREE.Vector3(60, 0, 100)
};

export {
    storyScreenSlide2,
    StoryScreenSlide2SceneDescription
}; 
