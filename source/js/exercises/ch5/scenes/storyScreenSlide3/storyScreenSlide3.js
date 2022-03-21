import * as THREE from 'three';

import vertexShader from '../../shaders/vertexShader.vert';
import fragmentShader from '../../shaders/fragmentShader.frag';

import { loadTexture } from '../misc';

import { makeSnowman } from './objects/snowman';

async function storyScreenSlide3() {
    const group = new THREE.Group();

    // const texture = await loadTexture('img/exercises/chapter5/story-slide3.png');
    
    // var geometry = new THREE.PlaneGeometry(2, 2);
    // var material = new THREE.RawShaderMaterial({
    //     uniforms: {
    //         map: { type: 't', value: texture }
    //     },
    //     vertexShader,
    //     fragmentShader
    // });
    
    // var plane = new THREE.Mesh(geometry, material);
    // group.add(plane);

    group.add(makeSnowman());

    return function renderScreen() {
        return group;
    };
}

export { storyScreenSlide3 }; 
