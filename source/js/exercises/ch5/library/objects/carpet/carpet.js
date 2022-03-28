import * as THREE from 'three';

import { makeLatheRoad } from '../latheRoad';
import { toVec3 } from '../../colors';

import fragmentShader from './fragment.frag';

const RAD_FACTOR = Math.PI / 180;

function makeMaterial(color1, color2) {
    const lambertShader = THREE.ShaderLib['lambert'];
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
        uniforms: uniforms,
        vertexShader: lambertShader.vertexShader,
        fragmentShader,
        lights: true,
        defines: {
            USE_UV: ''
        }
    });

    return material;
}

function makeCarpet(color1, color2) {
    const carpet = makeLatheRoad(16, 74, 32, makeMaterial(color1, color2));

    carpet.scale.set(0.195, 0.195, 0.195);
    carpet.position.set(0, 0, 0);
    carpet.rotateY(120 * RAD_FACTOR);

    return carpet;
}

export { makeCarpet };
