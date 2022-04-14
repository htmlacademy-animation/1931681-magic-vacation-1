import * as THREE from "three";

import {makeRoomLayout} from "./objects/roomLayout";
import {makeSceneContent} from "./objects/sceneContent";
import {makeCarpet} from "./objects/carpet";
import {makeSaturnChandelier} from "./objects/saturnChandelier";
import {makeSuitcase} from "./objects/suitcase";
import {makeWallFlower} from "./objects/wallFlower";
import {makeDog} from "./objects/dog";

async function storyScreenSlide1() {
  const group = new THREE.Group();

  group.add(makeRoomLayout());
  group.add(makeSceneContent());
  group.add(makeWallFlower());
  group.add(makeCarpet());
  group.add(makeSaturnChandelier());
  group.add(makeSuitcase());
  group.add(makeDog());

  return function renderScreen() {
    return group;
  };
}

export {
  storyScreenSlide1
};
