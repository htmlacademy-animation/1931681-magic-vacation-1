import { initScenes } from './scenes/initScenes';
import { initSvgObjects } from './svg/initSvgObjects';
import { initModels } from './models/initModels';

import { initAnimation } from './initAnimation';
import { initRenderer } from './initRenderer';
import { initEventListeners } from './initEventListeners';

async function scene() {
    await Promise.all([
        initSvgObjects(),
        initModels()
    ]);
    const scenes = await initScenes();  

    const animation = initAnimation();
    const renderer = initRenderer();

    initEventListeners(renderer, scenes, animation);
}

scene();
