import { makeLatheRoad } from '../../../library/objects/latheRoad';

const RAD_FACTOR = Math.PI / 180;

function makeCarpet() {
    const carpet = makeLatheRoad(16, 74, 32);

    carpet.scale.set(0.195, 0.195, 0.195);
    carpet.position.set(0, 0, 0);
    carpet.rotateY(120 * RAD_FACTOR);

    return carpet;
}

export { makeCarpet };
