import * as THREE from 'three';

import { makeSaturnChandelier } from './objects/saturnChandelier';
import { makeCarpet } from './objects/carpet';

async function storyScreenSlide4() {
    const group = new THREE.Group();

    group.add(makeSaturnChandelier());
    group.add(makeCarpet());

    return function renderScreen() {
        return group;
    };
}

const StoryScreenSlide4SceneDescription = {
    cameraPosition: new THREE.Vector3(0, 0, 50),
    directionalLightPosition: new THREE.Vector3(-10, 50, 15),
    pointLight1Position: new THREE.Vector3(-50, -35, 25),
    pointLight2Position: new THREE.Vector3(60, 0, 100)
};

export {
    storyScreenSlide4,
    StoryScreenSlide4SceneDescription
};
