import * as THREE from "three";

const START_WIDTH = 500;
const RAD_FACTOR = Math.PI / 180;

function makeLatheRoad(
    fromAngle,
    toAngle,
    width,
    material,
    startWidth = START_WIDTH
) {
  let points = [
    new THREE.Vector2(startWidth, 30.5),
    new THREE.Vector2(startWidth, 30),
    new THREE.Vector2(startWidth + width, 30),
    new THREE.Vector2(startWidth + width, 30.5)
  ];

  const geometry = new THREE.LatheGeometry(
      points,
      50,
      0,
      toAngle * RAD_FACTOR
  );

  const latheRoad = new THREE.Mesh(geometry, material);

  latheRoad.rotateX(180 * RAD_FACTOR);

  return latheRoad;

}

export {makeLatheRoad};
