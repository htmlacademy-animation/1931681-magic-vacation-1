import {
    TITLE_SCREEN_ID,
    STORY_SCREEN_SLIDE1_ID,
    STORY_SCREEN_SLIDE2_ID,
    STORY_SCREEN_SLIDE3_ID,
    STORY_SCREEN_SLIDE4_ID
} from './objects/misc';

// using hashchange event instead of screenChanged
// (its easier to render plane for initial page)
function initEventListeners(renderer, scenes, animation) {
    function tryToRenderScene() {
        const hash = window.location.hash;
        let sceneId;

        if (hash === '#top') {
            sceneId = TITLE_SCREEN_ID;
        } else if (hash === '#story') {
            const slideActiveClass = [...document.body.classList].find(
                styleClass => styleClass.match(/slide\d-active/)
            );

            switch (slideActiveClass) {
                case 'slide1-active':
                    sceneId = STORY_SCREEN_SLIDE1_ID;
                    break;
                case 'slide2-active':
                    sceneId = STORY_SCREEN_SLIDE2_ID;
                    break;
                case 'slide3-active':
                    sceneId = STORY_SCREEN_SLIDE3_ID;
                    break;
                case 'slide4-active':
                    sceneId = STORY_SCREEN_SLIDE4_ID;
                    break;
                default:
                    break;
            }
        }
        const scene = scenes[sceneId];
        if (scene) {
            renderer.redrawScene(scene(0));

            animation.restartAnimation(time => 
                renderer.renderScene(scene(time))
            );            
        }
    }

    window.addEventListener('hashchange', tryToRenderScene);
    window.addEventListener('slide-change', tryToRenderScene);

    tryToRenderScene();
}

export { initEventListeners };
