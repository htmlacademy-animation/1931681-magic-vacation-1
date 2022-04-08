import * as THREE from "three";

function makeSoftMaterial(color, side = THREE.FrontSide) {
  return new THREE.MeshLambertMaterial({
    color,
    side
  });
}

export {makeSoftMaterial};
