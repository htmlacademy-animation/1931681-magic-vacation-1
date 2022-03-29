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

export { storyScreenSlide4 }; 
