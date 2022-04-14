import {SCENE1_CONTENT} from "../../../models/misc";
import {createModelInstance} from "../../../models/createModelInstance";

function makeSceneContent() {
  const sceneContent = createModelInstance(SCENE1_CONTENT, true);

  sceneContent.scale.set(0.052, 0.052, 0.052);
  sceneContent.position.set(-0.5, 0, 0);

  return sceneContent;
}

export {makeSceneContent};
