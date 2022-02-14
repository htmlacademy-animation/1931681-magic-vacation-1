import { getPosition } from '../misc';

const ROTATION_ANIMATION_TIME = 2 * 1000;

function toRadians(deg) {
    return (Math.PI * deg) / 180;
}

function dampingOscillator(x) {
    const xShifted = (x - 230) / 100;

    return 5.5 * Math.exp(-0.21 * (xShifted - 6.5)) * Math.cos(xShifted - 6.5);
}

function oscillationTransition(time) {
    let horizontalShift = 0;
    let verticalShift = 0;
    let rotation = 0;

    if (time < ROTATION_ANIMATION_TIME) {
        if (time <= 680) {
            verticalShift = -Math.pow(time, 2) / 680 + 680;
            rotation = Math.PI * 2.5 / 18;
        } else {
            const oscillation = dampingOscillator(time);

            verticalShift = 0;
            horizontalShift = -5 * oscillation;
            rotation = -3 * toRadians(oscillation);
        }
    }

    return [ horizontalShift, verticalShift, rotation ];
}

function moveWithRotationAnimation(rotationPointX, rotationPointY, context, image, time, x, y, width, height) {
    context.save();

    context.translate(x, y);

    if (time < ROTATION_ANIMATION_TIME) {
        const [ horizontalShift, verticalShift, rotation ] = oscillationTransition(time);

        context.translate(horizontalShift, verticalShift);
   
        context.translate(rotationPointX, rotationPointY);
        context.rotate(rotation);
        context.translate(-rotationPointX, -rotationPointY);
    }

    context.drawImage(image, 0, 0, width, height);

    context.restore();
}

function icebergAnimation(...args) {
    return moveWithRotationAnimation(getPosition(0.13), getPosition(0.05), ...args);
}

function seaCalfAnimation(...args) {
    return moveWithRotationAnimation(getPosition(0.165), getPosition(0.255), ...args);
}

export {
    icebergAnimation,
    seaCalfAnimation
};
