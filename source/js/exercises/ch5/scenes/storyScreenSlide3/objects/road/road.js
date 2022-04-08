import * as THREE from "three";

import {makeLatheRoad} from "../../../../library/objects/latheRoad";
import {GreyColor, WhiteColor, toVec3} from "../../../../library/colors";

import fragmentShader from "./fragment.frag";

const RAD_FACTOR = Math.PI / 180;

function makeMaterial() {
  const lambertShader = THREE.ShaderLib[`lambert`];
  const uniforms = THREE.UniformsUtils.clone(lambertShader.uniforms);

  uniforms.stripeSize = {
    value: 0.1
  };
  uniforms.spaceSize = {
    value: 0.12
  };
  uniforms.padStart = {
    value: 0.05
  };
  uniforms.stripeWidth = {
    value: 0.05
  };
  uniforms.firstColor = {
    value: toVec3(GreyColor)
  };
  uniforms.secondColor = {
    value: toVec3(WhiteColor)
  };

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: lambertShader.vertexShader,
    fragmentShader,
    lights: true,
    defines: {
      USE_UV: ``
    }
  });

  return material;
}

function makeRoad() {
  const road = makeLatheRoad(0, 90, 85, makeMaterial());

  road.scale.set(0.076, 0.076, 0.076);
  road.position.set(0, 2.5, 0);
  road.rotateY(89.86 * RAD_FACTOR);

  return road;
}

export {makeRoad};
