import * as THREE from 'three';

import {
    FLAMINGO_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeFlamingo() {
    const geometry = makeSVGExtrudeGeometry(FLAMINGO_ID);
    const material = new THREE.MeshStandardMaterial({
        color: 0xD16563,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const flamingo = new THREE.Mesh(geometry, material);

    // flamingo.scale.set(0.8, 0.8, 0.8);
    flamingo.position.set(-200, 185, 0);
    flamingo.rotateZ(189 * RAD_FACTOR);
    flamingo.rotateX(15 * RAD_FACTOR);

    return flamingo;
}

export { makeFlamingo }; 
