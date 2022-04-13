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

export {
  storyScreenSlide2
};
