import * as THREE from 'three';

const RAD_FACTOR = Math.PI / 180;

function makeSphere() {
    const geometry = new THREE.SphereGeometry(60, 15, 15);
    const material = new THREE.MeshStandardMaterial({
        color: 0xD81D39,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });

    const sphere = new THREE.Mesh(geometry, material);

    return sphere;
}

function makeRing() {
    var points = [
        new THREE.Vector2(80, 34),
        new THREE.Vector2(80, 30),
        new THREE.Vector2(120, 30),
        new THREE.Vector2(120, 34),
        new THREE.Vector2(80, 34)
    ];

    const geometry = new THREE.LatheGeometry(
        points,
        35,
        0,
        360 * RAD_FACTOR
    );
    const material = new THREE.MeshStandardMaterial({
        color: 0x5738A7,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });

    const ring = new THREE.Mesh(geometry, material);
    
    ring.position.set(0, -33, 0);
    ring.rotateZ(18 * RAD_FACTOR);

    return ring;
}

function makeSaturn() {
    const saturn = new THREE.Group();

    saturn.add(makeSphere());
    saturn.add(makeRing());

    saturn.scale.set(0.3, 0.3, 0.3);

    return saturn;

}

export { makeSaturn };
