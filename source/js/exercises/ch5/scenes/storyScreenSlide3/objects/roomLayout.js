import * as THREE from "three";

import {SkyLightBlueColor, MountainBlueColor} from "../../../library/colors";
import {makeSoftMaterial} from "../../../library/materials/soft";

import {makeRoomLayout as makeRoomLayoutGeneral} from "../../../library/objects/roomLayout";

function makeRoomLayout() {
  const roomLayout = makeRoomLayoutGeneral(
      makeSoftMaterial(SkyLightBlueColor, THREE.DoubleSide),
      makeSoftMaterial(MountainBlueColor)
  );

  return roomLayout;
}

export {makeRoomLayout};
