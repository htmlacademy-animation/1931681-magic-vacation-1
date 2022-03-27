import * as THREE from 'three';

import { GreenColor } from '../../../library/colors';
import { makeBasicMaterial } from '../../../library/materials/basic';
import {
    LEAF_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeSmallLeaf() {
    const geometry = makeSVGExtrudeGeometry(LEAF_ID, { depth: 1 });
    const material = makeBasicMaterial(GreenColor);
   
    const smallLeaf = new THREE.Mesh(geometry, material);

    smallLeaf.scale.set(0.1, 0.08, 0.1);
    smallLeaf.position.set(-14, -1, 4);
    smallLeaf.rotateZ(220 * RAD_FACTOR);
    smallLeaf.rotateY(-220 * RAD_FACTOR);
    smallLeaf.rotateX(20 * RAD_FACTOR);

    return smallLeaf;
}

export { makeSmallLeaf };