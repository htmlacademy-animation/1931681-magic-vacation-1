import * as THREE from "three";

import {PurpleColor, DarkPurpleColor} from "../../../library/colors";
import {makeSoftMaterial} from "../../../library/materials/soft";

import {makeRoomLayout as makeRoomLayoutGeneral} from "../../../library/objects/roomLayout";

function makeRoomLayout() {
  const roomLayout = makeRoomLayoutGeneral(
      makeSoftMaterial(PurpleColor, THREE.DoubleSide),
      makeSoftMaterial(DarkPurpleColor)
  );

  return roomLayout;
}

export {makeRoomLayout};
