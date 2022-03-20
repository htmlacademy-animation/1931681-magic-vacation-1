import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

import {
    KEYHOLE_ID,
    AllSvgObjects,
    setSVGPoolShapePath,
    SVGObjectsDescriptors
} from './misc';

const loader = new SVGLoader();

async function loadSVG(svgId) {
    return new Promise(resolve =>
        loader.load(
            SVGObjectsDescriptors[svgId],
            data => {
                setSVGPoolShapePath(
                    svgId,
                    data.paths[0].toShapes()
                );
                resolve();
            }
        )
    );
}

async function initSvgObjects() {
    await Promise.all(AllSvgObjects.map(objectId => loadSVG(objectId)));
}

export { initSvgObjects };
