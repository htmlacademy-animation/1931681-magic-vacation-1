import * as THREE from 'three';

import { makeWallFlower } from '../../library/objects/wallFlower';
import { makeSaturnChandelier } from '../../library/objects/saturnChandelier';

import { makeCarpet } from './objects/carpet';

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

