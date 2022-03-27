import * as THREE from 'three';

import { BlueColor } from '../../../library/colors';
import { makeSoftMaterial } from '../../../library/materials/soft';

function makePyramid() {
    const geometry = new THREE.ConeGeometry(90 * Math.sqrt(2), 200, 4);
    const material = makeSoftMaterial(BlueColor);
    
    var pyramid = new THREE.Mesh(geometry, material);
    pyramid.scale.set(0.07, 0.07, 0.07);
    pyramid.position.set(0, 0, 0);
    

    return pyramid;
}

export { makePyramid };
