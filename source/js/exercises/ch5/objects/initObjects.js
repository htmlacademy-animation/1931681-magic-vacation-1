import * as THREE from 'three';

import { objects as objectsDescriptors } from './objects';

import fragmentShader from '../shaders/fragmentShader.frag';
import vertexShader from '../shaders/vertexShader.vert';

async function initObjects() {
    const loader = new THREE.TextureLoader();
    const objects = {};

    for (let i = 0; i !== objectsDescriptors.length; i++) {
        const {
            id, texture, vertex, fragment, uniforms
        } = objectsDescriptors[i];

        await new Promise(resolve =>
            loader.load(texture, texture => {
                objects[id] = {
                    texture,
                    vertexShader: vertex || vertexShader,
                    fragmentShader: fragment || fragmentShader
                };

                resolve();
            })
        );
    }

    return objects;
}

export { initObjects };
