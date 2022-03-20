import * as THREE from 'three';

import {
    SNOWFLAKE_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeSnowflake() {
    const geometry = makeSVGExtrudeGeometry(SNOWFLAKE_ID);
    const material = new THREE.MeshStandardMaterial({
        color: 0x335CB7,
        metalness: 0.05,
        emissive: 0x0,
        roughness: 0.5
    });
   
    const snowflake = new THREE.Mesh(geometry, material);

    snowflake.scale.set(0.6, 0.6, 0.6);
    snowflake.position.set(-170, -5, 50);
    snowflake.rotateX(-15 * RAD_FACTOR);
    snowflake.rotateY(35 * RAD_FACTOR);

    return snowflake;
}

export { makeSnowflake };
