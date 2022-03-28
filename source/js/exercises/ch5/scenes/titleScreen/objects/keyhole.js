import * as THREE from 'three';

import {
    KEYHOLE_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';
import { DarkPurpleColor, DominantRedColor } from '../../../library/colors';
import { makeSoftMaterial } from '../../../library/materials/soft';

const RAD_FACTOR = Math.PI / 180;

function makeKeyhole() {
    const geometry = makeSVGExtrudeGeometry(KEYHOLE_ID);
    const material = makeSoftMaterial(DarkPurpleColor);
   
    const keyhole = new THREE.Mesh(geometry, material);

    keyhole.scale.set(0.1, 0.1, 0.1);
    keyhole.position.set(-100, 100, 0);
    keyhole.rotateX(180 * RAD_FACTOR);

    return keyhole;
}

export { makeKeyhole }; 
