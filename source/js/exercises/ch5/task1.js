import { initAnimation } from './initAnimation';
import { initObjects } from './objects/initObjects';
import { initScene } from './initScene';
import { initEventListeners } from './initEventListeners';

async function scene() {
    const animation = initAnimation();
    const objects = await initObjects();
    const renderer = initScene();
    initEventListeners(renderer, objects, animation);
}

scene();
