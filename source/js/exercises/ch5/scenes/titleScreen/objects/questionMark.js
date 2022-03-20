import * as THREE from 'three';

import {
    QUESTION_MARK_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeQuestionMark() {
    const geometry = makeSVGExtrudeGeometry(QUESTION_MARK_ID);
    const material = new THREE.MeshStandardMaterial({
        color: 0x4066C4,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const questionMark = new THREE.Mesh(geometry, material);

    questionMark.scale.set(0.6, 0.6, 0.6);
    questionMark.position.set(40, -170, 50);
    questionMark.rotateZ(15 * RAD_FACTOR);
    questionMark.rotateX(130 * RAD_FACTOR);

    return questionMark;
}

export { makeQuestionMark }; 
