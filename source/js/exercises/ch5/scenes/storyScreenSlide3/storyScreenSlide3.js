import * as THREE from "three";

import {makeRoomLayout} from "./objects/roomLayout";
import {makeSceneContent} from "./objects/sceneContent";
import {makeSnowman} from "./objects/snowman";
import {makeRoad} from "./objects/road/road";
import {makePavementPillars} from "./objects/pavementPillars";
import {makeCompass} from "./objects/compass";

async function storyScreenSlide3() {
  const group = new THREE.Group();

  group.add(makeRoomLayout());
  group.add(makeSceneContent());
  group.add(makeSnowman());
  group.add(makeRoad());
  group.add(makePavementPillars());
  group.add(makeCompass());

  return function renderScreen() {
    return group;
  };
}

export {
  storyScreenSlide3
};
