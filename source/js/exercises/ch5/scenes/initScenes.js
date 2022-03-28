import {
    TITLE_SCREEN_ID,
    STORY_SCREEN_SLIDE1_ID,
    STORY_SCREEN_SLIDE2_ID,
    STORY_SCREEN_SLIDE3_ID,
    STORY_SCREEN_SLIDE4_ID
} from './misc';

import { titleScreen } from './titleScreen/titleScreen';
import { storyScreenSlide1 } from './storyScreenSlide1/storyScreenSlide1';
import { storyScreenSlide2 } from './storyScreenSlide2/storyScreenSlide2';
import { storyScreenSlide3 } from './storyScreenSlide3/storyScreenSlide3';
import { storyScreenSlide4 } from './storyScreenSlide4/storyScreenSlide4';

async function initScenes() {
    return {
        [TITLE_SCREEN_ID]: await titleScreen(),
        [STORY_SCREEN_SLIDE1_ID]: await storyScreenSlide1(),
        [STORY_SCREEN_SLIDE2_ID]: await storyScreenSlide2(),
        [STORY_SCREEN_SLIDE3_ID]: await storyScreenSlide3(),
        [STORY_SCREEN_SLIDE4_ID]: await storyScreenSlide4()
    };
}

export { initScenes };
