import * as THREE from 'three';

import {
  TITLE_SCREEN_ID,
  STORY_SCREEN_SLIDE1_ID,
  STORY_SCREEN_SLIDE2_ID,
  STORY_SCREEN_SLIDE3_ID,
  STORY_SCREEN_SLIDE4_ID
} from "./misc";

import {
  titleScreen,
  TitleScreenSceneDescription
} from "./titleScreen/titleScreen";
import {storyScreenSlide1} from "./storyScreenSlide1/storyScreenSlide1";
import {storyScreenSlide2} from "./storyScreenSlide2/storyScreenSlide2";
import {storyScreenSlide3} from "./storyScreenSlide3/storyScreenSlide3";
import {storyScreenSlide4} from "./storyScreenSlide4/storyScreenSlide4";

const StoryScreenSceneDescription = {
  ambientLightIntensity: 0.3,
  cameraPosition: new THREE.Vector3(47, 15, 47),
  directionalLightPosition: new THREE.Vector3(140, 115, 120),
  pointLight1Intensity: 0.1,
  pointLight1Position: new THREE.Vector3(45, 30, 50),
  pointLight2Intensity: 0.1,
  pointLight2Position: new THREE.Vector3(45, 38, 10)
};


async function initScenes() {
  return {
    [TITLE_SCREEN_ID]: {
      content: await titleScreen(),
      sceneDescription: TitleScreenSceneDescription
    },
    [STORY_SCREEN_SLIDE1_ID]: {
      content: await storyScreenSlide1(),
      sceneDescription: StoryScreenSceneDescription
    },
    [STORY_SCREEN_SLIDE2_ID]: {
      content: await storyScreenSlide2(),
      sceneDescription: StoryScreenSceneDescription
    },
    [STORY_SCREEN_SLIDE3_ID]: {
      content: await storyScreenSlide3(),
      sceneDescription: StoryScreenSceneDescription
    },
    [STORY_SCREEN_SLIDE4_ID]: {
      content: await storyScreenSlide4(),
      sceneDescription: StoryScreenSceneDescription
    }
  };
}

export {initScenes};
