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

const StoryScreenSlide3SceneDescription = {
    cameraPosition: new THREE.Vector3(0, 0, 50),
    directionalLightPosition: new THREE.Vector3(-10, 50, 15),
    pointLight1Position: new THREE.Vector3(-50, -35, 25),
    pointLight2Position: new THREE.Vector3(60, 0, 100)
};

export {
    storyScreenSlide3,
    StoryScreenSlide3SceneDescription
}; 
