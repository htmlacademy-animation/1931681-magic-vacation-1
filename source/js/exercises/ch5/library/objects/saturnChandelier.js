import * as THREE from 'three';

import { makeSaturn } from './saturn';

function makeRope() {
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 250);
    const material = new THREE.MeshStandardMaterial({
        color: 0x8C97AB,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });

    const rope = new THREE.Mesh(geometry, material);
    rope.position.set(0, 125, 0);

    return rope;
}

function makeSphere() {
    const geometry = new THREE.SphereGeometry(3, 15, 15);
    const material = new THREE.MeshStandardMaterial({
        color: 0x6844C6,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });

    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(0, 40, 0);

    return sphere;
}

function makeSaturnChandelier() {
    const saturnChandelier = new THREE.Group();

    saturnChandelier.add(makeSaturn());
    saturnChandelier.add(makeRope());
    saturnChandelier.add(makeSphere());

    saturnChandelier.position.set(50, 150, 100);

    return saturnChandelier;
}

export { makeSaturnChandelier };
