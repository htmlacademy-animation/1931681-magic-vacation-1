import {
    getPosition,
    linearBezier
} from '../misc';

const ANIMATION_END_TIMING = 400;

function scaleTransition(time) {
    if (time < ANIMATION_END_TIMING) {
        return linearBezier(time / ANIMATION_END_TIMING, 0.85, 1);
    } else {
        return 1;
    }
}

function opacityTransition(time) {
    if (time < ANIMATION_END_TIMING) {
        return linearBezier(time / ANIMATION_END_TIMING, 0, 1);
    } else {
        return 1;
    }
}

function keyholeAnimation(context, image, time, x, y, width, height) {
    context.save();

    context.translate(x, y);

    const scale = scaleTransition(time);
    const opacity = opacityTransition(time);

    const translateX = width * scale / 2;
    const translateY = height * scale / 2;

    context.translate(translateX, translateY);
    context.scale(scale, scale);
    context.translate(-translateX, -translateY);

    context.globalAlpha = opacity;

    context.drawImage(image, 0, 0, width, height);

    context.restore();
}

export { keyholeAnimation };
