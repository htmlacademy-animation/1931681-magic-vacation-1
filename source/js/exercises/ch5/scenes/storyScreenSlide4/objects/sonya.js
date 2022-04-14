import {SONYA_ID} from "../../../models/misc";
import {createModelInstance} from "../../../models/createModelInstance";

function makeSonya() {
  const sonya = createModelInstance(SONYA_ID, true);

  sonya.scale.set(0.05, 0.05, 0.05);
  sonya.position.set(23, 6, 12);

  return sonya;
}

export {makeSonya};
