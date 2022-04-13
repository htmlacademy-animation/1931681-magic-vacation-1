import * as THREE from "three";

import {makeKeyholeBackPlane} from "./objects/keyholeBackPlane";
import {makeKeyhole} from "./objects/keyhole";
import {makeFlamingo} from "./objects/flamingo";
import {makeSnowflake} from "./objects/snowflake";
import {makeQuestionMark} from "./objects/questionMark";
import {makeLeaf} from "./objects/leaf";
import {makeSaturn} from "./objects/saturn";
import {makeAirplane} from "./objects/airplane";
import {makeWatermelon} from "./objects/watermelon";
import {makeSuitcase} from "./objects/suitcase";

async function titleScreen() {
  const group = new THREE.Group();

  group.add(makeKeyholeBackPlane());
  group.add(makeKeyhole());
  group.add(makeFlamingo());
  group.add(makeSnowflake());
  group.add(makeQuestionMark());
  group.add(makeLeaf());
  group.add(makeSaturn());
  group.add(makeAirplane());
  group.add(makeWatermelon());
  group.add(makeSuitcase());

  return function renderScreen() {
    return group;
  };
}

const TitleScreenSceneDescription = {
  ambientLightIntensity: 0.0,
  cameraPosition: new THREE.Vector3(0, 0, 50),
  directionalLightPosition: new THREE.Vector3(-10, 50, 15),
  pointLight1Intensity: 0.3,
  pointLight1Position: new THREE.Vector3(-50, -35, 200),
  pointLight2Intensity: 0.7,
  pointLight2Position: new THREE.Vector3(60, 0, 300)
};

export {
  titleScreen,
  TitleScreenSceneDescription
};
