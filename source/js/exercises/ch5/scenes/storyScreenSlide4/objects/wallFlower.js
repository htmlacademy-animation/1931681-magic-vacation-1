import {ShadowedAdditionalPurpleColor} from "../../../library/colors";

import {makeWallFlower as makeWallFlowerGeneral} from "../../../library/objects/wallFlower";

function makeWallFlower() {
  const wallFlower = makeWallFlowerGeneral(ShadowedAdditionalPurpleColor);

  return wallFlower;
}

export {makeWallFlower};
