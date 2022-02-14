import { initObjects } from './objects/initObjects';
import { initScene } from './initScene';
import { initEventListeners } from './initEventListeners';

async function scene() {
    const objects = await initObjects();
    const renderScene = initScene(objects);
    initEventListeners(renderScene);
}

scene();
