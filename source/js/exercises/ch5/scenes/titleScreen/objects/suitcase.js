import { SUITCASE_ID } from '../../../models/misc';
import { createModelInstance } from '../../../models/createModelInstance';

const RAD_FACTOR = Math.PI / 180;

function makeSuitcase() {
    const suitcase = createModelInstance(SUITCASE_ID);

    suitcase.scale.set(0.035, 0.035, 0.035);
    suitcase.position.set(-5, -13, 3);
    suitcase.rotateY(220 * RAD_FACTOR);
    suitcase.rotateX(-30 * RAD_FACTOR);

    return suitcase;
}

export { makeSuitcase };
