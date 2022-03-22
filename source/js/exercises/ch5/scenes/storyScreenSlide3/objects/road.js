import { makeLatheRoad } from '../../../library/objects/latheRoad';

const RAD_FACTOR = Math.PI / 180;

function makeRoad() {
    const road = makeLatheRoad(0, 90, 25);

    road.scale.set(2.5, 2.5, 2.5);
    road.position.set(0, -20, 0);
    road.rotateY(120 * RAD_FACTOR);

    return road;
}

export { makeRoad };