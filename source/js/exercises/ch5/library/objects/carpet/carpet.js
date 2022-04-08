import * as THREE from "three";

import {makeLatheRoad} from "../latheRoad";
import {toVec3} from "../../colors";

import fragmentShader from "./fragment.frag";

const RAD_FACTOR = Math.PI / 180;

function makeMaterial(color1, color2) {
  const lambertShader = THREE.ShaderLib[`lambert`];
  const uniforms = THREE.UniformsUtils.clone(lambertShader.uniforms);

  uniforms.density = {
    value: 7
  };
  uniforms.firstColor = {
    value: toVec3(color1)
  };
  uniforms.secondColor = {
    value: toVec3(color2)
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

function makeCarpet(color1, color2) {
  const carpet = makeLatheRoad(60, 55, 110, makeMaterial(color1, color2));

  carpet.scale.set(0.07, 0.07, 0.07);
  carpet.position.set(3, 2.5, 3);
  carpet.rotateY(108 * RAD_FACTOR);

  return carpet;
}

export {makeCarpet};
