import * as THREE from 'three';

import { GreenColor } from '../../../library/colors';
import { makeBasicMaterial } from '../../../library/materials/basic';
import {
    LEAF_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeLeaf() {
    const geometry = makeSVGExtrudeGeometry(LEAF_ID);
    const material = makeBasicMaterial(GreenColor);
   
    const leaf = new THREE.Mesh(geometry, material);

    leaf.scale.set(0.11, 0.11, 0.11);
    leaf.position.set(38, 20, 10);
    leaf.rotateX(165 * RAD_FACTOR);
    leaf.rotateY(45 * RAD_FACTOR);
    leaf.rotateZ(75 * RAD_FACTOR);

    return leaf;
}

export { makeLeaf }; 
