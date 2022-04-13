import {DOG_ID} from "../../../models/misc";
import {createModelInstance} from "../../../models/createModelInstance";

const RAD_FACTOR = Math.PI / 180;

function makeDog() {
  const dog = createModelInstance(DOG_ID, true);

  dog.scale.set(0.05, 0.05, 0.05);
  dog.position.set(26, 0, 22);
  dog.rotateY(70 * RAD_FACTOR);

  return dog;
}

export {makeDog};
