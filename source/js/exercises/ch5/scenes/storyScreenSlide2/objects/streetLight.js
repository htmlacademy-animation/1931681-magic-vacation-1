import * as THREE from "three";

import {BlueColor, LightBlueColor} from "../../../library/colors";
import {makeSoftMaterial} from "../../../library/materials/soft";

const SQRT_2 = Math.sqrt(2);

const baseMaterial = makeSoftMaterial(BlueColor);

function makeLampTop() {
  const geometry = new THREE.CylinderGeometry(
      45 / SQRT_2, 57 / SQRT_2,
      6,
      4
  );

  const lampTop = new THREE.Mesh(geometry, baseMaterial);

  lampTop.castShadow = true;

  lampTop.position.set(0, 179, 0);

  return lampTop;
}

function makeLampGlass() {
  const geometry = new THREE.CylinderGeometry(
      42 / SQRT_2, 34 / SQRT_2,
      60,
      4
  );
  const material = makeSoftMaterial(LightBlueColor);

  const lampGlass = new THREE.Mesh(geometry, material);

  lampGlass.castShadow = true;

  lampGlass.position.set(0, 147, 0);

  return lampGlass;
}

function makeLampBottom() {
  const geometry = new THREE.CylinderGeometry(
      37 / SQRT_2, 37 / SQRT_2,
      4,
      4
  );

  const lampBottom = new THREE.Mesh(geometry, baseMaterial);

  lampBottom.castShadow = true;

  lampBottom.position.set(0, 115, 0);

  return lampBottom;
}

function makeColumn() {
  const geometry = new THREE.CylinderGeometry(7, 7, 230);

  const column = new THREE.Mesh(geometry, baseMaterial);

  column.castShadow = true;

  return column;
}

function makeBaseSphere() {
  const geometry = new THREE.SphereGeometry(16);

  const baseSphere = new THREE.Mesh(geometry, baseMaterial);

  baseSphere.castShadow = true;

  baseSphere.position.set(0, -115, 0);

  return baseSphere;
}

function makeBaseCylinder() {
  const geometry = new THREE.CylinderGeometry(16, 16, 120);

  const baseCylinder = new THREE.Mesh(geometry, baseMaterial);

  baseCylinder.castShadow = true;

  baseCylinder.position.set(0, -175, 0);

  return baseCylinder;
}

function makeStreetLight() {
  const streetLight = new THREE.Group();

  streetLight.castShadow = true;

  streetLight.add(makeLampTop());
  streetLight.add(makeLampGlass());
  streetLight.add(makeLampBottom());
  streetLight.add(makeColumn());
  streetLight.add(makeBaseSphere());
  streetLight.add(makeBaseCylinder());

  streetLight.scale.set(0.04, 0.04, 0.04);
  streetLight.position.set(34, 10, 6);
  streetLight.rotateY(45 * Math.PI / 180);

  return streetLight;
}

export {makeStreetLight};
