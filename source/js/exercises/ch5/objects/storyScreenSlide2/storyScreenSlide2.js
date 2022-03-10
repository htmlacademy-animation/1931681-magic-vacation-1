import * as THREE from 'three';

import vertexShader from '../../shaders/vertexShader.vert';
import fragmentShader from '../../shaders/hueFragmentShader.frag';

import { loadTexture } from '../misc';

import { getHueMatrixUniform } from './hueMatrixUniform';
import { getBubblePositionUniform } from './bubblePositionUniform';
import {
    FIRST_BUBBLE_RADIUS,
    SECOND_BUBBLE_RADIUS,
    THIRD_BUBBLE_RADIUS
} from './misc';

async function storyScreenSlide2() {
    const group = new THREE.Group();

    const texture = await loadTexture('img/exercises/chapter5/story-slide2.png');
    
    var geometry = new THREE.PlaneGeometry(2, 2);
    var material = new THREE.RawShaderMaterial({
        uniforms: {
            map: { type: 't', value: texture },
            hueMatrix: { type: 'mat4', value: getHueMatrixUniform(0) },
            bubblePosition: { type: 'mat3', value: getBubblePositionUniform(0) },
            bubbleRadius: { type: 'vec3', value: [
                FIRST_BUBBLE_RADIUS,
                SECOND_BUBBLE_RADIUS,
                THIRD_BUBBLE_RADIUS
            ]}
        },
        vertexShader,
        fragmentShader
    });
    
    var plane = new THREE.Mesh(geometry, material);
    group.add(plane);

    return function renderScreen(time) {
        material.uniforms.hueMatrix.value = getHueMatrixUniform(time);
        material.uniforms.bubblePosition.value = getBubblePositionUniform(time);

        return group;
    };
}

export { storyScreenSlide2 }; 
