import * as THREE from "three";

function makeBasicMaterial(color, side = THREE.FrontSide) {
  return new THREE.MeshPhysicalMaterial({
    color,
    roughness: 0.65,
    metalness: 0.30,
    side
  });
}

export {makeBasicMaterial};
