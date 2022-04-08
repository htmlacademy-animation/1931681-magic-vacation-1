import {makeSaturn as makeSaturnGeneral} from "../../../library/objects/saturn";

const RAD_FACTOR = Math.PI / 180;

function makeSaturn() {
  const saturn = makeSaturnGeneral();

  saturn.scale.set(0.045, 0.045, 0.045);
  saturn.position.set(30, -10, 10);
  saturn.rotateZ(5 * RAD_FACTOR);
  saturn.rotateX(-15 * RAD_FACTOR);

  return saturn;
}

export {makeSaturn};
