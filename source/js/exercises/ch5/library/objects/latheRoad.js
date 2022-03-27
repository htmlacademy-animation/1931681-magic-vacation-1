import * as THREE from 'three';

const START_WIDTH = 150;
const RAD_FACTOR = Math.PI / 180;

function makeLatheRoad(
    fromAngle,
    toAngle,
    width
) {
    var points = [
        new THREE.Vector2(START_WIDTH, 30.5),
        new THREE.Vector2(START_WIDTH, 30),
        new THREE.Vector2(START_WIDTH + width, 30),
        new THREE.Vector2(START_WIDTH + width, 30.5)
    ];

    const geometry = new THREE.LatheGeometry(
        points,
        25,
        fromAngle * RAD_FACTOR,
        toAngle * RAD_FACTOR
    );
    const material = new THREE.MeshStandardMaterial({
        color: 0x646C7C,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const latheRoad = new THREE.Mesh(geometry, material);

    latheRoad.rotateX(180 * RAD_FACTOR);

    return latheRoad;

}

export { makeLatheRoad };
