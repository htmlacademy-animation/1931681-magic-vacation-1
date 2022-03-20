import * as THREE from 'three';

import {
    LEAF_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeSmallLeaf() {
    const geometry = makeSVGExtrudeGeometry(LEAF_ID, { depth: 1 });
    const material = new THREE.MeshStandardMaterial({
        color: 0x019D64,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const smallLeaf = new THREE.Mesh(geometry, material);

    smallLeaf.scale.set(0.65, 0.55, 0.65);
    smallLeaf.position.set(-100, -40, 55);
    smallLeaf.rotateZ(220 * RAD_FACTOR);
    smallLeaf.rotateY(-220 * RAD_FACTOR);
    smallLeaf.rotateX(20 * RAD_FACTOR);

    return smallLeaf;
}

export { makeSmallLeaf };