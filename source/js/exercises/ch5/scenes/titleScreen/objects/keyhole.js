import * as THREE from 'three';

import {
    KEYHOLE_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeKeyhole() {
    const geometry = makeSVGExtrudeGeometry(KEYHOLE_ID);
    const material = new THREE.MeshStandardMaterial({
        color: 0x4C406B,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const keyhole = new THREE.Mesh(geometry, material);

    keyhole.scale.set(0.6, 0.6, 0.6);
    keyhole.position.set(-600, 600, 0);
    keyhole.rotateX(180 * RAD_FACTOR);

    return keyhole;
}

export { makeKeyhole }; 
