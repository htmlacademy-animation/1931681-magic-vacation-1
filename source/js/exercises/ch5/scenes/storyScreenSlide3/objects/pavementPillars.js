import * as THREE from "three";

import {MetalGreyColor} from "../../../library/colors";
import {makeBasicMaterial} from "../../../library/materials/basic";

const RAD_FACTOR = Math.PI / 180;

const PAVEMENT_RADIUS = 36.5;
const PAVEMENT_START_ANGLE = 10;
const PAVEMENT_END_ANGLE = 80;
const PAVEMENT_STEP = 16;

const PILLAR_RADIUS = 0.6;
const PILLAR_HEIGHT = 4;

const material = makeBasicMaterial(MetalGreyColor);

function makePillar(angle) {
  const geometry = new THREE.CylinderGeometry(PILLAR_RADIUS, PILLAR_RADIUS, PILLAR_HEIGHT, 30);

  const pillar = new THREE.Mesh(geometry, material);

  pillar.castShadow = true;

  const radAngle = RAD_FACTOR * angle;
  const xPos = PAVEMENT_RADIUS * Math.cos(radAngle);
  const yPos = PAVEMENT_RADIUS * Math.sin(radAngle);
  pillar.position.set(xPos, PILLAR_HEIGHT / 2, yPos);

  return pillar;
}

function makePavementPillars() {
  const pavementPillars = new THREE.Group();

  for (let angle = PAVEMENT_START_ANGLE; angle <= PAVEMENT_END_ANGLE; angle += PAVEMENT_STEP) {
    pavementPillars.add(makePillar(angle));
  }

  return pavementPillars;
}

export {makePavementPillars};
