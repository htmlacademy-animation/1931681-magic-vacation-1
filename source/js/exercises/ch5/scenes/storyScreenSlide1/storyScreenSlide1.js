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

export { storyScreenSlide1 }; 

