import hueFragmentShader from '../shaders/hueFragmentShader.frag';
import {
    TITLE_SCREEN_ID,
    STORY_SCREEN_SLIDE1_ID,
    STORY_SCREEN_SLIDE2_ID,
    STORY_SCREEN_SLIDE3_ID,
    STORY_SCREEN_SLIDE4_ID
} from './misc';

const objects = [
    {
        id: TITLE_SCREEN_ID,
        texture: 'img/exercises/chapter5/title-screen.png'
    },
    {
        id: STORY_SCREEN_SLIDE1_ID,
        texture: 'img/exercises/chapter5/story-slide1.png'
    },
    {
        id: STORY_SCREEN_SLIDE2_ID,
        texture: 'img/exercises/chapter5/story-slide2.png',
        fragment: hueFragmentShader,
        uniforms: {
            rotation: { type: 'float', value: 345.0 }
        }
    },
    {
        id: STORY_SCREEN_SLIDE3_ID,
        texture: 'img/exercises/chapter5/story-slide3.png'
    },
    {
        id: STORY_SCREEN_SLIDE4_ID,
        texture: 'img/exercises/chapter5/story-slide4.png'
    }
];

export {
    objects
};
