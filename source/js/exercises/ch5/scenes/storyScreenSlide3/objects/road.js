import { makeLatheRoad } from '../../../library/objects/latheRoad';

const RAD_FACTOR = Math.PI / 180;

function makeRoad() {
    const road = makeLatheRoad(0, 90, 25);

    road.scale.set(0.2, 0.2, 0.2);
    road.position.set(0, -1.5, 0);
    road.rotateY(130 * RAD_FACTOR);

    return road;
}

export { makeRoad };