import * as THREE from 'three';

import {
    LEAF_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeBigLeaf() {
    const geometry = makeSVGExtrudeGeometry(LEAF_ID, { depth: 1 });
    const material = new THREE.MeshStandardMaterial({
        color: 0x019D64,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const bigLeaf = new THREE.Mesh(geometry, material);

    bigLeaf.scale.set(0.9, 1.0, 0.9);
    bigLeaf.position.set(-90, 40, 40);
    bigLeaf.rotateZ(180 * RAD_FACTOR);
    bigLeaf.rotateY(-220 * RAD_FACTOR);

    return bigLeaf;
}

export { makeBigLeaf };