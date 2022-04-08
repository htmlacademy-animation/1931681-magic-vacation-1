import {SUITCASE_ID} from "../../models/misc";
import {createModelInstance} from "../../models/createModelInstance";

const RAD_FACTOR = Math.PI / 180;

function makeRoomSuitcase() {
  const roomSuitcase = createModelInstance(SUITCASE_ID);

  roomSuitcase.scale.set(0.045, 0.045, 0.045);
  roomSuitcase.position.set(17, 0, 39);
  roomSuitcase.rotateY(19 * RAD_FACTOR);

  return roomSuitcase;
}

export {makeRoomSuitcase};
