import { initScenes } from './scenes/initScenes';
import { initSvgObjects } from './svg/initSvgObjects';

import { initAnimation } from './initAnimation';
import { initRenderer } from './initRenderer';
import { initEventListeners } from './initEventListeners';

async function scene() {
    await initSvgObjects();
    const scenes = await initScenes();  

    const animation = initAnimation();
    const renderer = initRenderer();

    initEventListeners(renderer, scenes, animation);
}

scene();
