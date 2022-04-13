import {SCENE3_CONTENT} from "../../../models/misc";
import {createModelInstance} from "../../../models/createModelInstance";

function makeSceneContent() {
  const sceneContent = createModelInstance(SCENE3_CONTENT, false, true);

  sceneContent.scale.set(0.051, 0.051, 0.051);
  sceneContent.position.set(0.5, 0, 1);

  return sceneContent;
}

export {makeSceneContent};
