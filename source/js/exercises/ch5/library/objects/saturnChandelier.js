import * as THREE from "three";

import {
  MetalGreyColor, BrightPurpleColor,
  ShadowedBrightPurpleColor
} from "../colors";
import {makeSoftMaterial} from "../materials/soft";

import {
  makeSaturn,
  Theme as SaturnTheme
} from "./saturn";

const Theme = {
  Regular: `Regular`,
  Dark: `Dark`
};

const RAD_FACTOR = Math.PI / 180;

function makeStyleInfo(theme) {
  let sphereColor;
  let ropeColor = MetalGreyColor;
  let saturnTheme;

  switch (theme) {
    case Theme.Dark:
      sphereColor = ShadowedBrightPurpleColor;
      saturnTheme = SaturnTheme.Dark;
      break;
    default:
    case Theme.Regular:
      sphereColor = BrightPurpleColor;
      saturnTheme = SaturnTheme.Regular;
      break;
  }

  return [
    makeSoftMaterial(sphereColor),
    makeSoftMaterial(ropeColor),
    saturnTheme
  ];
}

function makeRope(material) {
  const geometry = new THREE.CylinderGeometry(0.5, 0.5, 250);

  const rope = new THREE.Mesh(geometry, material);

  rope.position.set(0, 125, 0);

  return rope;
}

function makeSphere(material) {
  const geometry = new THREE.SphereGeometry(3, 15, 15);

  const sphere = new THREE.Mesh(geometry, material);

  sphere.position.set(0, 40, 0);

  return sphere;
}

function makeSaturnChandelier(theme = Theme.Regular) {
  const [sphereMaterial, ropeMaterial, saturnTheme] = makeStyleInfo(theme);

  const saturnChandelier = new THREE.Group();

  saturnChandelier.add(makeSaturn(saturnTheme));
  saturnChandelier.add(makeRope(ropeMaterial));
  saturnChandelier.add(makeSphere(sphereMaterial));

  saturnChandelier.scale.set(0.18, 0.18, 0.18);
  saturnChandelier.position.set(20, 25, 10);
  saturnChandelier.rotateY(100 * RAD_FACTOR);

  return saturnChandelier;
}

export {
  Theme,
  makeSaturnChandelier
};
