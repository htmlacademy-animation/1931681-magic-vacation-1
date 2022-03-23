import { makeLatheRoad } from '../../../library/objects/latheRoad';

const RAD_FACTOR = Math.PI / 180;

function makeCarpet() {
    const carpet = makeLatheRoad(16, 74, 30);

    carpet.scale.set(2.5, 2.5, 2.5);
    carpet.position.set(0, -20, 0);
    carpet.rotateY(120 * RAD_FACTOR);

    return carpet;
}

export { makeCarpet };
