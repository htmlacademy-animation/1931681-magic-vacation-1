import hueFragmentShader from '../shaders/hueFragmentShader.frag';
import {
    TITLE_SCREEN_ID,
    STORY_SCREEN_SLIDE1_ID,
    STORY_SCREEN_SLIDE2_ID,
    STORY_SCREEN_SLIDE3_ID,
    STORY_SCREEN_SLIDE4_ID
} from './misc';

function getHueMatrix(rotation) {
    const radRotation = Math.PI * rotation / 180;

    const cosR = Math.cos(radRotation);
    const sinR = Math.sin(radRotation);
    const w = 1.0 / 3.0;
    const sqrW = Math.sqrt(w);

    const a00 = cosR + ((1.0 - cosR) * w);
    const a01 = (w * (1.0 - cosR)) - (sqrW * sinR);
    const a02 = (w * (1.0 - cosR)) + (sqrW * sinR);
    const a10 = (w * (1.0 - cosR)) + (sqrW * sinR);
    const a11 = cosR + (w * (1.0 - cosR));
    const a12 = (w * (1.0 - cosR)) - (sqrW * sinR);
    const a20 = (w * (1.0 - cosR)) - (sqrW * sinR);
    const a21 = (w * (1.0 - cosR)) + (sqrW * sinR);
    const a22 = cosR + (w * (1.0 - cosR));

    return [
        a00, a01, a02, 0.0,
        a10, a11, a12, 0.0,
        a20, a21, a22, 0.0,
        0.0, 0.0, 0.0, 1.0
    ];
}

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
            hueMatrix: { type: 'mat4', value: getHueMatrix(345) },
            bubblePosition: { type: 'mat3', value: [
                400.0, 350.0, 0.0,
                790.0, 850.0, 0.0,
                600.0, 180.0, 0.0
            ]},
            bubbleRadius: { type: 'vec3', value: [
                50.0,
                40.0,
                35.0
            ]}
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
