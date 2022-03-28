import * as THREE from 'three';

function makeStrongMaterial(color) {
    return new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.95,
        emissive: 0xFFFFFF,
        emissiveIntensity: 0.05
    });
}

export { makeStrongMaterial };
