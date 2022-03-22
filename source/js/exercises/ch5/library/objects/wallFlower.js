import * as THREE from 'three';

import {
    FLOWER_ID,
    makeSVGExtrudeGeometry
} from '../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeWallFlower() {
    const geometry = makeSVGExtrudeGeometry(FLOWER_ID);
    const material = new THREE.MeshStandardMaterial({
        color: 0x6851A7,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const wallFlower = new THREE.Mesh(geometry, material);

    wallFlower.scale.set(0.3, 0.3, 0.3);
    wallFlower.position.set(50, 150, 0);
    wallFlower.rotateZ(180 * RAD_FACTOR);

    return wallFlower;
}

export { makeWallFlower }; 
