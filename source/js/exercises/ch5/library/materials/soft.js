import * as THREE from 'three';

function makeSoftMaterial(color) {
    return new THREE.MeshLambertMaterial({
        color
    });
}

export { makeSoftMaterial };
