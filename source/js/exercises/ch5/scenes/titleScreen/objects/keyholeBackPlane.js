import * as THREE from 'three';

import { PurpleColor } from '../../../library/colors';
import { makeBasicMaterial } from '../../../library/materials/basic';

function makeKeyholeBackPlane() {
    const geometry = new THREE.PlaneGeometry(50, 50);
    const material = makeBasicMaterial(PurpleColor);
   
    const keyholeBackPlane = new THREE.Mesh(geometry, material);

    keyholeBackPlane.position.set(0, 0, -10);

    return keyholeBackPlane;
}

export { makeKeyholeBackPlane }; 
