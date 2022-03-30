import * as THREE from 'three';

import { makeWallFlower } from '../../library/objects/wallFlower';

import { makeCarpet } from './objects/carpet';
import { makeSaturnChandelier } from './objects/saturnChandelier';

async function storyScreenSlide1() {
    const group = new THREE.Group();

    group.add(makeWallFlower());
    group.add(makeCarpet());
    group.add(makeSaturnChandelier());

    return function renderScreen() {
        return group;
    };
}

const StoryScreenSlide1SceneDescription = {
    cameraPosition: new THREE.Vector3(0, 0, 50),
    directionalLightPosition: new THREE.Vector3(-10, 50, 15),
    pointLight1Position: new THREE.Vector3(-50, -35, 25),
    pointLight2Position: new THREE.Vector3(60, 0, 100)
};

export {
    storyScreenSlide1,
    StoryScreenSlide1SceneDescription
}; 

