import * as THREE from 'three';

import { objects as objectsDescriptors } from './objects';

async function initObjects() {
    const loader = new THREE.TextureLoader();
    const objects = {};

    for (let i = 0; i !== objectsDescriptors.length; i++) {
        const {
            id, texture
        } = objectsDescriptors[i];

        await new Promise(resolve =>
            loader.load(texture, texture => {
                objects[id] = {
                    texture
                };

                resolve();
            })
        );
    }

    return objects;
}

export { initObjects };
