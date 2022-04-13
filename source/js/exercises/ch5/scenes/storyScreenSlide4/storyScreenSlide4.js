import * as THREE from "three";

import {makeRoomLayout} from "./objects/roomLayout";
import {makeSceneContent} from "./objects/sceneContent";
import {makeSaturnChandelier} from "./objects/saturnChandelier";
import {makeCarpet} from "./objects/carpet";
import {makeSuitcase} from "./objects/suitcase";
import {makeWallFlower} from "./objects/wallFlower";
import {makeSonya} from "./objects/sonya";

async function storyScreenSlide4() {
  const group = new THREE.Group();

  group.add(makeRoomLayout());
  group.add(makeSceneContent());
  group.add(makeSaturnChandelier());
  group.add(makeCarpet());
  group.add(makeSuitcase());
  group.add(makeWallFlower());
  group.add(makeSonya());

  return function renderScreen() {
    return group;
  };
}

export {
  storyScreenSlide4
};
