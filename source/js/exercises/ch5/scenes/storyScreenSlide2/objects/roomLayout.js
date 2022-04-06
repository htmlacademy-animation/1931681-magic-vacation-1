import * as THREE from "three";

import {BlueColor, BrightBlueColor} from "../../../library/colors";
import {makeSoftMaterial} from "../../../library/materials/soft";
import {makeBasicMaterial} from "../../../library/materials/basic";

import {makeRoomLayout as makeRoomLayoutGeneral} from "../../../library/objects/roomLayout";

function makeRoomLayout() {
  const roomLayout = makeRoomLayoutGeneral(
      makeBasicMaterial(BlueColor, THREE.DoubleSide),
      makeSoftMaterial(BrightBlueColor)
  );

  return roomLayout;
}

export {makeRoomLayout};
