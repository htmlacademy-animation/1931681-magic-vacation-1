import * as THREE from 'three';

import {
    LEAF_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeLeaf() {
    const geometry = makeSVGExtrudeGeometry(LEAF_ID);
    const material = new THREE.MeshStandardMaterial({
        color: 0x01815D,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const leaf = new THREE.Mesh(geometry, material);

    leaf.scale.set(0.7, 0.8, 0.8);
    leaf.position.set(230, 140, 100);
    leaf.rotateX(130 * RAD_FACTOR);
    leaf.rotateY(25 * RAD_FACTOR);
    leaf.rotateZ(60 * RAD_FACTOR);

    return leaf;
}

export { makeLeaf }; 
