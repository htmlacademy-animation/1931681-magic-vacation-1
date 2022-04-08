import * as THREE from "three";

const BlueColor = new THREE.Color(`rgb(51, 113, 235)`);
const BrightBlueColor = new THREE.Color(`rgb(47, 58, 201)`);
const LightBlueColor = new THREE.Color(`rgb(150, 176, 243)`);
const DarkBlueColor = new THREE.Color(`rgb(12, 49, 112)`);
const SkyLightBlueColor = new THREE.Color(`rgb(161, 200, 240)`);
const MountainBlueColor = new THREE.Color(`rgb(101, 152, 219)`);
const DominantRedColor = new THREE.Color(`rgb(255, 32, 66)`);
const LightDominantRedColor = new THREE.Color(`rgb(255, 105, 120)`);
const ShadowedDominantRedColor = new THREE.Color(`rgb(124, 26, 48)`);
const PurpleColor = new THREE.Color(`rgb(163, 118, 235)`);
const BrightPurpleColor = new THREE.Color(`rgb(118, 76, 225)`);
const LightPurpleColor = new THREE.Color(`rgb(194, 153, 225)`);
const AdditionalPurpleColor = new THREE.Color(`rgb(119, 85, 189)`);
const DarkPurpleColor = new THREE.Color(`rgb(76, 49, 121)`);
const ShadowedPurpleColor = new THREE.Color(`rgb(75, 50, 116)`);
const ShadowedBrightPurpleColor = new THREE.Color(`rgb(56, 37, 108)`);
const ShadowedLightPurpleColor = new THREE.Color(`rgb(77, 53, 106)`);
const ShadowedAdditionalPurpleColor = new THREE.Color(`rgb(55, 38, 89)`);
const ShadowedDarkPurpleColor = new THREE.Color(`rgb(49, 42, 71)`);
const GreyColor = new THREE.Color(`rgb(118, 125, 143)`);
const MetalGreyColor = new THREE.Color(`rgb(126, 141, 164)`);
const OrangeColor = new THREE.Color(`rgb(230, 80, 0)`);
const GreenColor = new THREE.Color(`rgb(0, 210, 134)`);
const WhiteColor = new THREE.Color(`rgb(255, 255, 255)`);
const SnowColor = new THREE.Color(`rgb(182, 206, 240)`);

function toVec3(color) {
  return [color.r, color.g, color.b];
}

export {
  toVec3,
  BlueColor,
  BrightBlueColor,
  LightBlueColor,
  DarkBlueColor,
  SkyLightBlueColor,
  MountainBlueColor,
  DominantRedColor,
  LightDominantRedColor,
  ShadowedDominantRedColor,
  PurpleColor,
  BrightPurpleColor,
  LightPurpleColor,
  AdditionalPurpleColor,
  DarkPurpleColor,
  ShadowedPurpleColor,
  ShadowedBrightPurpleColor,
  ShadowedLightPurpleColor,
  ShadowedAdditionalPurpleColor,
  ShadowedDarkPurpleColor,
  GreyColor,
  MetalGreyColor,
  OrangeColor,
  GreenColor,
  WhiteColor,
  SnowColor
};
