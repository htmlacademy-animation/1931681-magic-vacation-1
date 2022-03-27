import * as THREE from 'three';

import { makeSaturnChandelier } from './objects/saturnChandelier';

async function storyScreenSlide4() {
    const group = new THREE.Group();

    group.add(makeSaturnChandelier());

    return function renderScreen() {
        return group;
    };
}

export { storyScreenSlide4 }; 
