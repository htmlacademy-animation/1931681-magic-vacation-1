import * as THREE from "three";

const TITLE_SCREEN_ID = `title-screen`;
const STORY_SCREEN_SLIDE1_ID = `story-slide1`;
const STORY_SCREEN_SLIDE2_ID = `story-slide2`;
const STORY_SCREEN_SLIDE3_ID = `story-slide3`;
const STORY_SCREEN_SLIDE4_ID = `story-slide4`;

const loader = new THREE.TextureLoader();

async function loadTexture(texturePath) {
  return new Promise((resolve) => loader.load(
      texturePath,
      (texture) => resolve(texture)
  ));
}

export {
  TITLE_SCREEN_ID,
  STORY_SCREEN_SLIDE1_ID,
  STORY_SCREEN_SLIDE2_ID,
  STORY_SCREEN_SLIDE3_ID,
  STORY_SCREEN_SLIDE4_ID,
  loadTexture
};
