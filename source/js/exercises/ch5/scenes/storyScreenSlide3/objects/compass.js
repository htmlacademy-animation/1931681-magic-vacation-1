import {COMPASS_ID} from "../../../models/misc";
import {createModelInstance} from "../../../models/createModelInstance";

function makeCompass() {
  const compass = createModelInstance(COMPASS_ID, true);

  compass.scale.set(0.05, 0.05, 0.05);
  compass.position.set(1, 0, 2);

  return compass;
}

export {makeCompass};
