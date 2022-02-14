import {
    TITLE_SCREEN_ID,
    STORY_SCREEN_SLIDE1_ID,
    STORY_SCREEN_SLIDE2_ID,
    STORY_SCREEN_SLIDE3_ID,
    STORY_SCREEN_SLIDE4_ID
} from './objects/misc';

// using hashchange event instead of screenChanged
// (its easier to render plane for initial page)
function initEventListeners(renderScene) {
    function tryToRenderPlane() {
        const hash = window.location.hash;
        let objectId;

        if (hash === '#top') {
            objectId = TITLE_SCREEN_ID;
        } else if (hash === '#story') {
            const slideActiveClass = [...document.body.classList].find(
                styleClass => styleClass.match(/slide\d-active/)
            );

            switch (slideActiveClass) {
                case 'slide1-active':
                    objectId = STORY_SCREEN_SLIDE1_ID;
                    break;
                case 'slide2-active':
                    objectId = STORY_SCREEN_SLIDE2_ID;
                    break;
                case 'slide3-active':
                    objectId = STORY_SCREEN_SLIDE3_ID;
                    break;
                case 'slide4-active':
                    objectId = STORY_SCREEN_SLIDE4_ID;
                    break;
                default:
                    break;
            }
        }

        if (objectId) {
            renderScene(objectId);
        }
    }

    window.addEventListener('hashchange', tryToRenderPlane);
    window.addEventListener('slide-change', tryToRenderPlane);

    tryToRenderPlane();
}

export { initEventListeners };
