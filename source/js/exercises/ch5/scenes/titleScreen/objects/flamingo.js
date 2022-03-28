import * as THREE from 'three';

import { LightDominantRedColor } from '../../../library/colors';
import { makeSoftMaterial } from '../../../library/materials/soft';
import {
    FLAMINGO_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeFlamingo() {
    const geometry = makeSVGExtrudeGeometry(FLAMINGO_ID);
    const material = makeSoftMaterial(LightDominantRedColor);
   
    const flamingo = new THREE.Mesh(geometry, material);

    flamingo.scale.set(0.15, 0.15, 0.15);
    flamingo.position.set(-38, 23, 10);
    flamingo.rotateZ(200 * RAD_FACTOR);
    flamingo.rotateX(5 * RAD_FACTOR);
    flamingo.rotateY(5 * RAD_FACTOR);

    return flamingo;
}

export { makeFlamingo }; 
