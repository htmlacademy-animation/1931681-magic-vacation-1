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
import {
  StoryScreenSlide1SceneDescription,
  storyScreenSlide1
} from "./storyScreenSlide1/storyScreenSlide1";
import {
  StoryScreenSlide2SceneDescription,
  storyScreenSlide2
} from "./storyScreenSlide2/storyScreenSlide2";
import {
  StoryScreenSlide3SceneDescription,
  storyScreenSlide3
} from "./storyScreenSlide3/storyScreenSlide3";
import {
  StoryScreenSlide4SceneDescription,
  storyScreenSlide4
} from "./storyScreenSlide4/storyScreenSlide4";

async function initScenes() {
  return {
    [TITLE_SCREEN_ID]: {
      content: await titleScreen(),
      sceneDescription: TitleScreenSceneDescription
    },
    [STORY_SCREEN_SLIDE1_ID]: {
      content: await storyScreenSlide1(),
      sceneDescription: StoryScreenSlide1SceneDescription
    },
    [STORY_SCREEN_SLIDE2_ID]: {
      content: await storyScreenSlide2(),
      sceneDescription: StoryScreenSlide2SceneDescription
    },
    [STORY_SCREEN_SLIDE3_ID]: {
      content: await storyScreenSlide3(),
      sceneDescription: StoryScreenSlide3SceneDescription
    },
    [STORY_SCREEN_SLIDE4_ID]: {
      content: await storyScreenSlide4(),
      sceneDescription: StoryScreenSlide4SceneDescription
    }
  };
}

export {initScenes};
