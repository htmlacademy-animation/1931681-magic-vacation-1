import * as THREE from "three";

import {ShadowedPurpleColor, ShadowedDarkPurpleColor} from "../../../library/colors";
import {makeSoftMaterial} from "../../../library/materials/soft";
import {makeBasicMaterial} from "../../../library/materials/basic";

import {makeRoomLayout as makeRoomLayoutGeneral} from "../../../library/objects/roomLayout";

function makeRoomLayout() {
  const roomLayout = makeRoomLayoutGeneral(
      makeBasicMaterial(ShadowedPurpleColor, THREE.DoubleSide),
      makeSoftMaterial(ShadowedDarkPurpleColor)
  );

  return roomLayout;
}

export {makeRoomLayout};
