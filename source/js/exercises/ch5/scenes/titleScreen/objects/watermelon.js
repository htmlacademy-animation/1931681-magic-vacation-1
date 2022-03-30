import { WATERMELON_ID } from '../../../models/misc';
import { createModelInstance } from '../../../models/createModelInstance';

const RAD_FACTOR = Math.PI / 180;

function makeWatermelon() {
    const watermelon = createModelInstance(WATERMELON_ID);

    watermelon.scale.set(0.145, 0.145, 0.085);
    watermelon.position.set(-35, -19, 12);
    watermelon.rotateX(-3 * RAD_FACTOR);
    watermelon.rotateZ(145 * RAD_FACTOR);

    return watermelon;
}

export { makeWatermelon };
