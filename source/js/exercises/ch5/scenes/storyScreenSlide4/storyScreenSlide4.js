import * as THREE from "three";

import {makeRoomLayout} from "./objects/roomLayout";
import {makeSceneContent} from "./objects/sceneContent";
import {makeSaturnChandelier} from "./objects/saturnChandelier";
import {makeCarpet} from "./objects/carpet";
import {makeSuitcase} from "./objects/suitcase";
import {makeWallFlower} from "./objects/wallFlower";

async function storyScreenSlide4() {
  const group = new THREE.Group();

  group.add(makeRoomLayout());
  group.add(makeSceneContent());
  group.add(makeSaturnChandelier());
  group.add(makeCarpet());
  group.add(makeSuitcase());
  group.add(makeWallFlower());

  return function renderScreen() {
    return group;
  };
}

const StoryScreenSlide4SceneDescription = {
  cameraPosition: new THREE.Vector3(47, 15, 47),
  directionalLightPosition: new THREE.Vector3(-50, -50, -50),
  pointLight1Position: new THREE.Vector3(154, 123, 131),
  pointLight2Position: new THREE.Vector3(177, 69, 216)
};

export {
  StoryScreenSlide4SceneDescription,
  storyScreenSlide4
};
