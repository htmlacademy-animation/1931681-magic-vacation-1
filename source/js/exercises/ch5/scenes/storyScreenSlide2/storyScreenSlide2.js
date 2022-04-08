import * as THREE from "three";

import {makeRoomLayout} from "./objects/roomLayout";
import {makeSceneContent} from "./objects/sceneContent";
import {makePyramid} from "./objects/pyramid";
import {makeBigLeaf} from "./objects/bigLeaf";
import {makeSmallLeaf} from "./objects/smallLeaf";
import {makeStreetLight} from "./objects/streetLight";
import {makeSuitcase} from "./objects/suitcase";

async function storyScreenSlide2() {
  const group = new THREE.Group();

  group.add(makeRoomLayout());
  group.add(makeSceneContent());
  group.add(makePyramid());
  group.add(makeBigLeaf());
  group.add(makeSmallLeaf());
  group.add(makeStreetLight());
  group.add(makeSuitcase());

  return function renderScreen(_) {
    return group;
  };
}

const StoryScreenSlide2SceneDescription = {
  cameraPosition: new THREE.Vector3(47, 15, 47),
  directionalLightPosition: new THREE.Vector3(-24, -1, 347),
  pointLight1Position: new THREE.Vector3(192, 123, -50),
  pointLight2Position: new THREE.Vector3(154, 146, 46)
};

export {
  storyScreenSlide2,
  StoryScreenSlide2SceneDescription
};
