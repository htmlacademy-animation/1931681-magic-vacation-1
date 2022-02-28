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

function getKeyframes(keyframes, time) {
    const pastKeyframes = keyframes.filter(
        keyframe => keyframe.time <= time
    );
    const futureKeyframes = keyframes.slice(pastKeyframes.length, keyframes.length);

    const fromKeyframe = pastKeyframes[pastKeyframes.length - 1];
    const toKeyframe = futureKeyframes[0];

    return [ fromKeyframe, toKeyframe ];
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
                400.0, 350.0, 0.0,
                790.0, 850.0, 0.0,
                600.0, 180.0, 0.0
            ]},
            bubbleRadius: { type: 'vec3', value: [
                50.0,
                40.0,
                35.0
            ]}
        },
        animations: [
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
