import * as THREE from 'three';

import { BlueColor } from '../../../library/colors';
import { makeBasicMaterial } from '../../../library/materials/basic';
import {
    SNOWFLAKE_ID,
    makeSVGExtrudeGeometry
} from '../../../svg/misc';

const RAD_FACTOR = Math.PI / 180;

function makeSnowflake() {
    const geometry = makeSVGExtrudeGeometry(SNOWFLAKE_ID);
    const material = makeBasicMaterial(BlueColor);
   
    const snowflake = new THREE.Mesh(geometry, material);

    snowflake.scale.set(0.08, 0.08, 0.08);
    snowflake.position.set(-28, 2, 8);
    snowflake.rotateY(45 * RAD_FACTOR);
    snowflake.rotateX(-15 * RAD_FACTOR);

    return snowflake;
}

export { makeSnowflake };
