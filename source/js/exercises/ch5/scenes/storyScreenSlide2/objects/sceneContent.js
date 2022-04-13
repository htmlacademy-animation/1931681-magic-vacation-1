import {SCENE2_CONTENT} from "../../../models/misc";
import {createModelInstance} from "../../../models/createModelInstance";

function makeSceneContent() {
  const sceneContent = createModelInstance(SCENE2_CONTENT, true, true);

  sceneContent.scale.set(0.052, 0.052, 0.052);
  sceneContent.position.set(1, 0, 1);

  return sceneContent;
}

export {makeSceneContent};
