import * as THREE from "three";

import {makeRoomLayout} from "./objects/roomLayout";
import {makeSceneContent} from "./objects/sceneContent";
import {makeSnowman} from "./objects/snowman";
import {makeRoad} from "./objects/road/road";
import {makePavementPillars} from "./objects/pavementPillars";

async function storyScreenSlide3() {
  const group = new THREE.Group();

  group.add(makeRoomLayout());
  group.add(makeSceneContent());
  group.add(makeSnowman());
  group.add(makeRoad());
  group.add(makePavementPillars());

  return function renderScreen() {
    return group;
  };
}

const StoryScreenSlide3SceneDescription = {
  cameraPosition: new THREE.Vector3(47, 15, 47),
  directionalLightPosition: new THREE.Vector3(30, 0, 385),
  pointLight1Position: new THREE.Vector3(192, 123, 7),
  pointLight2Position: new THREE.Vector3(123, 146, 46)
};

export {
  StoryScreenSlide3SceneDescription,
  storyScreenSlide3
};
