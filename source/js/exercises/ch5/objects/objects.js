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

const FIRST_BUBBLE_X_POS = window.innerWidth * 0.34;
const SECOND_BUBBLE_X_POS = window.innerWidth * 0.21;
const THIRD_BUBBLE_X_POS = window.innerWidth * 0.41;

const FIRST_BUBBLE_MAX_SHIFT = 75;
const SECOND_BUBBLE_MAX_SHIFT = 45;
const THIRD_BUBBLE_MAX_SHIFT = 90;

const FIRST_BUBBLE_RADIUS = 55.0;
const SECOND_BUBBLE_RADIUS = 40.0;
const THIRD_BUBBLE_RADIUS = 35.0;

const FIRST_BUBBLE_DELAY = 0;
const SECOND_BUBBLE_DELAY = 700;
const THIRD_BUBBLE_DELAY = 1000;

function getKeyframes(keyframes, time) {
    const pastKeyframes = keyframes.filter(
        keyframe => keyframe.time <= time
    );
    const futureKeyframes = keyframes.slice(pastKeyframes.length, keyframes.length);

    const fromKeyframe = pastKeyframes[pastKeyframes.length - 1];
    const toKeyframe = futureKeyframes[0];

    return [ fromKeyframe, toKeyframe ];
}

const radFactor = Math.PI / 180.0;

function getBubbleXShift(x) {
    const xRad = radFactor * x;

    return (Math.exp(-0.001 * x) * Math.cos(xRad));
}

function getBubbleYPosition(delay, time, bubbleRadius) {
    if (time <= delay) {
        return -bubbleRadius;
    }

    return time - delay;
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
            // hueMatrix: { type: 'mat4', value: getHueMatrix(345) },
            hueMatrix: { type: 'mat4', value: getHueMatrix(0) },
            bubblePosition: { type: 'mat3', value: [
                500.0, 350.0, 0.0,
                300.0, 200.0, 0.0,
                600.0, 180.0, 0.0
            ]},
            bubbleRadius: { type: 'vec3', value: [
                FIRST_BUBBLE_RADIUS,
                SECOND_BUBBLE_RADIUS,
                THIRD_BUBBLE_RADIUS
            ]}
        },
        animations: [
            {
                id: 'bubblePosition',
                keyframes: [],
                getValue: function getValue(time) {
                    const delayedXTime = time / 2.5;
                    const delayedYTime = time / 1.7;
                    
                    const firstBubbleXPos = FIRST_BUBBLE_X_POS + FIRST_BUBBLE_MAX_SHIFT * getBubbleXShift(delayedXTime);
                    const secondBubbleXPos = SECOND_BUBBLE_X_POS + SECOND_BUBBLE_MAX_SHIFT * getBubbleXShift(delayedXTime);
                    const thirdBubbleXPos = THIRD_BUBBLE_X_POS + THIRD_BUBBLE_MAX_SHIFT * getBubbleXShift(delayedXTime);

                    const firstBubbleYPos = getBubbleYPosition(FIRST_BUBBLE_DELAY, delayedYTime, FIRST_BUBBLE_RADIUS);
                    const secondBubbleYPos = getBubbleYPosition(SECOND_BUBBLE_DELAY, delayedYTime, SECOND_BUBBLE_RADIUS);
                    const thirdBubbleYPos = getBubbleYPosition(THIRD_BUBBLE_DELAY, delayedYTime, THIRD_BUBBLE_RADIUS);

                    return [
                        firstBubbleXPos, firstBubbleYPos, 0.0,
                        secondBubbleXPos, secondBubbleYPos, 0.0,
                        thirdBubbleXPos, thirdBubbleYPos, 0.0
                    ];
                }
            },

            {
                id: 'hueMatrix',
                keyframes: [
                    {
                        time: 0,
                        value: getHueMatrix(345)
                    },
                    {
                        time: 750,
                        value: getHueMatrix(10)
                    },
                    {
                        time: 1500,
                        value: getHueMatrix(350)
                    },
                    {
                        time: 2000,
                        value: getHueMatrix(0)
                    }
                ],
                getValue: function getValue(time) {
                    const [ fromKeyframe, toKeyframe ] = getKeyframes(this.keyframes, time);

                    if (!toKeyframe) {
                        return fromKeyframe.value;
                    }

                    const result = [];
                    
                    for (let i = 0; i !== fromKeyframe.value.length; i++) {
                        const fromValue = fromKeyframe.value[i];
                        const toValue = toKeyframe.value[i];

                        const amount = (time - fromKeyframe.time) / (toKeyframe.time - fromKeyframe.time);

                        result.push((1 - amount) * fromValue + amount * toValue);
                    }

                    return result;
                }
            }
        ]
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
