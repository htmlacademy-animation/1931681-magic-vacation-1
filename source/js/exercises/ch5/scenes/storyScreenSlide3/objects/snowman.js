import * as THREE from "three";

import {SnowColor, OrangeColor} from "../../../library/colors";
import {makeStrongMaterial} from "../../../library/materials/strong";
import {makeSoftMaterial} from "../../../library/materials/soft";

const snowMaterial = makeStrongMaterial(SnowColor);

function makeBottomSphere() {
  const geometry = new THREE.SphereGeometry(75, 24, 15);

  const bottomSphere = new THREE.Mesh(geometry, snowMaterial);

  bottomSphere.castShadow = true;

  bottomSphere.position.set(0, -50, 0);

  return bottomSphere;
}

function makeTopSphere() {
  const geometry = new THREE.SphereGeometry(44, 24, 15);

  const topSphere = new THREE.Mesh(geometry, snowMaterial);

  topSphere.castShadow = true;

  topSphere.position.set(0, 50, 0);

  return topSphere;
}

function makeNose() {
  const geometry = new THREE.ConeGeometry(18, 75, 25);
  const material = makeSoftMaterial(OrangeColor);

  const nose = new THREE.Mesh(geometry, material);

  nose.castShadow = true;

  nose.position.set(50, 55, 0);
  nose.rotateZ(-90 * Math.PI / 180);

  return nose;
}

function makeSnowman() {
  const snowman = new THREE.Group();

  snowman.add(makeBottomSphere());
  snowman.add(makeTopSphere());
  snowman.add(makeNose());

  snowman.rotateY(0 * Math.PI / 180);
  snowman.scale.set(0.05, 0.05, 0.05);
  snowman.position.set(10, 8.5, 20);


  return snowman;
}

export {makeSnowman};
