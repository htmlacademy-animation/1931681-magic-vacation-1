import * as THREE from "three";

import {makeRoomLayout} from "./objects/roomLayout";
import {makeSceneContent} from "./objects/sceneContent";
import {makeCarpet} from "./objects/carpet";
import {makeSaturnChandelier} from "./objects/saturnChandelier";
import {makeSuitcase} from "./objects/suitcase";
import {makeWallFlower} from "./objects/wallFlower";

async function storyScreenSlide1() {
  const group = new THREE.Group();

  group.add(makeRoomLayout());
  group.add(makeSceneContent());
  group.add(makeWallFlower());
  group.add(makeCarpet());
  group.add(makeSaturnChandelier());
  group.add(makeSuitcase());

  return function renderScreen() {
    return group;
  };
}

const StoryScreenSlide1SceneDescription = {
  cameraPosition: new THREE.Vector3(47, 15, 47),
  directionalLightPosition: new THREE.Vector3(84, 116, 18),
  pointLight1Position: new THREE.Vector3(30, -50, 115),
  pointLight2Position: new THREE.Vector3(223, 401, 138)
};

export {
  storyScreenSlide1,
  StoryScreenSlide1SceneDescription
};
