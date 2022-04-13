import * as THREE from "three";

function makeSoftMaterial(color, side = THREE.FrontSide) {
  return new THREE.MeshPhongMaterial({
    color,
    side
  });
}

export {makeSoftMaterial};
