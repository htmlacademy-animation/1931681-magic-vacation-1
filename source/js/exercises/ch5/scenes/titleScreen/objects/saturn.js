import { makeSaturn as makeSaturnGeneral } from "../../../library/objects/saturn";

function makeSaturn() {
    const saturn = makeSaturnGeneral();

    saturn.position.set(150, -50, 60);

    return saturn;
}

export { makeSaturn };
