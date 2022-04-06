import * as THREE from "three";

import {makeBasicMaterial} from "../../library/materials/basic";

import {
  FLOWER_ID,
  makeSVGExtrudeGeometry
} from "../../svg/misc";

const RAD_FACTOR = Math.PI / 180;

function makeWallFlower(color) {
  const geometry = makeSVGExtrudeGeometry(FLOWER_ID);
  const material = makeBasicMaterial(color);

  const wallFlower = new THREE.Mesh(geometry, material);

  wallFlower.scale.set(0.051, 0.051, 0.051);
  wallFlower.position.set(3, 21.5, 22);
  wallFlower.rotateY(-90 * RAD_FACTOR);
  wallFlower.rotateZ(180 * RAD_FACTOR);

  return wallFlower;
}

export {makeWallFlower};
