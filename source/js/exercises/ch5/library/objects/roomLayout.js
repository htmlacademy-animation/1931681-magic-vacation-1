import * as THREE from "three";

import {SCENE_WALLS} from "../../models/misc";
import {createModelInstance} from "../../models/createModelInstance";

const RAD_FACTOR = Math.PI / 180;

function makeWalls(material) {
  const walls = createModelInstance(SCENE_WALLS, material, false, true);

  return walls;
}

function makeFloor(material) {
  const geometry = new THREE.CircleGeometry(1500, 10, 0, 90 * RAD_FACTOR);

  const floor = new THREE.Mesh(geometry, material);

  floor.receiveShadow = true;

  floor.rotateX(-90 * RAD_FACTOR);
  floor.rotateZ(-90 * RAD_FACTOR);

  return floor;
}

function makeRoomLayout(wallsMaterial, floorMaterial) {
  const roomLayout = new THREE.Group();

  roomLayout.add(makeWalls(wallsMaterial));
  roomLayout.add(makeFloor(floorMaterial));

  roomLayout.scale.set(0.05, 0.05, 0.05);

  return roomLayout;
}

export {makeRoomLayout};
