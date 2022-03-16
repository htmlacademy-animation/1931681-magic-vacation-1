import * as THREE from 'three';

const snowMaterial = new THREE.MeshStandardMaterial({
    color: 0xE2F2FF,
    metalness: 0.0,
    emissive: 0x0,
    roughness: 5.5
});
const noseMaterial = new THREE.MeshStandardMaterial({
    color: 0xD74F19,
    metalness: 0.0,
    emissive: 0x0,
    roughness: 5.5
});

function makeBottomSphere() {
    const geometry = new THREE.SphereGeometry(75, 24, 15);

    const bottomSphere = new THREE.Mesh(geometry, snowMaterial);
    bottomSphere.position.set(0, -50, 0);

    return bottomSphere;
}

function makeTopSphere() {
    const geometry = new THREE.SphereGeometry(44, 24, 15);

    const bottomSphere = new THREE.Mesh(geometry, snowMaterial);
    bottomSphere.position.set(0, 50, 0);

    return bottomSphere;
}

function makeNose() {
    const geometry = new THREE.ConeGeometry(18, 75, 25);

    const nose = new THREE.Mesh(geometry, noseMaterial);
    nose.position.set(50, 55, 0);
    nose.rotateZ(-90 * Math.PI / 180);

    return nose;
}

function makeSnowman() {
    const snowman = new THREE.Group();

    snowman.add(makeBottomSphere());
    snowman.add(makeTopSphere());
    snowman.add(makeNose());

    // snowman.position.set(0, 0, 0);
    snowman.rotateY(-45 * Math.PI / 180);
    snowman.scale.set(0.4, 0.4, 0.4);

    return snowman;
}

export { makeSnowman };
