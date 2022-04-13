import * as THREE from "three";

import {BlueColor} from "../../../library/colors";
import {makeSoftMaterial} from "../../../library/materials/soft";

const RAD_FACTOR = Math.PI / 180;

function makePyramid() {
  const geometry = new THREE.ConeGeometry(90 * Math.sqrt(2), 185, 4);
  const material = makeSoftMaterial(BlueColor);

  let pyramid = new THREE.Mesh(geometry, material);

  pyramid.castShadow = true;

  pyramid.scale.set(0.07, 0.07, 0.07);
  pyramid.position.set(14, 7, 15);
  pyramid.rotateY(45 * RAD_FACTOR);

  return pyramid;
}

export {makePyramid};
