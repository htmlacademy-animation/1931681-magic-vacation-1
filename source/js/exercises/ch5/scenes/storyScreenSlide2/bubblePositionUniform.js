import {
    RAD_FACTOR,
    FIRST_BUBBLE_X_POS, SECOND_BUBBLE_X_POS, THIRD_BUBBLE_X_POS,
    FIRST_BUBBLE_MAX_SHIFT, SECOND_BUBBLE_MAX_SHIFT, THIRD_BUBBLE_MAX_SHIFT,
    FIRST_BUBBLE_RADIUS, SECOND_BUBBLE_RADIUS, THIRD_BUBBLE_RADIUS,
    FIRST_BUBBLE_DELAY, SECOND_BUBBLE_DELAY, THIRD_BUBBLE_DELAY
} from './misc';

function getBubbleXShift(x) {
    const xRad = RAD_FACTOR * x;

    return (Math.exp(-0.001 * x) * Math.cos(xRad));
}

function getBubbleYPosition(delay, time, bubbleRadius) {
    if (time <= delay) {
        return -bubbleRadius;
    }

    return time - delay;
}

function getBubblePositionUniform(time) {
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

export { getBubblePositionUniform };
