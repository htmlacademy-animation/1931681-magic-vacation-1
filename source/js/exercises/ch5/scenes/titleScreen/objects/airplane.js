import { WhiteColor } from '../../../library/colors';
import { makeBasicMaterial } from '../../../library/materials/basic';

import { AIRPLANE_ID } from '../../../models/misc';
import { createModelInstance } from '../../../models/createModelInstance';

const RAD_FACTOR = Math.PI / 180;

function makeAirplane() {
    const material = makeBasicMaterial(WhiteColor);

    const airplane = createModelInstance(AIRPLANE_ID, material);

    airplane.scale.set(0.105, 0.105, 0.105);
    airplane.position.set(15, 8, 7);
    airplane.rotateX(45 * RAD_FACTOR);
    airplane.rotateY(145 * RAD_FACTOR);
    airplane.rotateZ(-10 * RAD_FACTOR);

    return airplane;
}

export { makeAirplane };
