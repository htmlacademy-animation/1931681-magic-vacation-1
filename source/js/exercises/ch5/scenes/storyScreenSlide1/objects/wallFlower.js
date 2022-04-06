import {AdditionalPurpleColor} from "../../../library/colors";

import {makeWallFlower as makeWallFlowerGeneral} from "../../../library/objects/wallFlower";

function makeWallFlower() {
  const wallFlower = makeWallFlowerGeneral(AdditionalPurpleColor);

  return wallFlower;
}

export {makeWallFlower};
