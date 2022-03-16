import * as THREE from 'three';

const SQRT_2 = Math.sqrt(2);

const darkBlueMaterial = new THREE.MeshStandardMaterial({
    color: 0x1D69DE,
    metalness: 0.0,
    emissive: 0x0,
    roughness: 5.5
});
const glassMaterial = new THREE.MeshStandardMaterial({
    color: 0x9DB3EE,
    metalness: 0.0,
    emissive: 0x0,
    roughness: 5.5
});

function makeLampTop() {
    const geometry = new THREE.CylinderGeometry(
        45 / SQRT_2, 57 / SQRT_2,
        6,
        4
    );

    const lampGlass = new THREE.Mesh(geometry, darkBlueMaterial);
    lampGlass.position.set(0, 179, 0);

    return lampGlass;
}

function makeLampGlass() {
    const geometry = new THREE.CylinderGeometry(
        42 / SQRT_2, 34 / SQRT_2,
        60,
        4
    );

    const lampGlass = new THREE.Mesh(geometry, glassMaterial);
    lampGlass.position.set(0, 147, 0);

    return lampGlass;
}

function makeLampBottom() {
    const geometry = new THREE.CylinderGeometry(
        37 / SQRT_2, 37 / SQRT_2,
        4,
        4
    );

    const lampBottom = new THREE.Mesh(geometry, darkBlueMaterial);
    lampBottom.position.set(0, 115, 0);

    return lampBottom;
}

function makeColumn() {
    const geometry = new THREE.CylinderGeometry(7, 7, 230);
    
    const column = new THREE.Mesh(geometry, darkBlueMaterial);

    return column;
}

function makeBaseSphere() {
    const geometry = new THREE.SphereGeometry(16);

    const baseSphere = new THREE.Mesh(geometry, darkBlueMaterial);
    baseSphere.position.set(0, -115, 0);

    return baseSphere;
}

function makeBaseCylinder() {
    const geometry = new THREE.CylinderGeometry(16, 16, 120);

    const baseCylinder = new THREE.Mesh(geometry, darkBlueMaterial);
    baseCylinder.position.set(0, -175, 0);

    return baseCylinder;
}

function makeStreetLight() {
    const streetLight = new THREE.Group();

    streetLight.add(makeLampTop());
    streetLight.add(makeLampGlass());
    streetLight.add(makeLampBottom());
    streetLight.add(makeColumn());
    streetLight.add(makeBaseSphere());
    streetLight.add(makeBaseCylinder());

    streetLight.position.set(150, -100, 10);
    streetLight.rotateY(45 * Math.PI / 180);
    streetLight.scale.set(0.4, 0.4, 0.4);

    return streetLight;
}

export { makeStreetLight };
