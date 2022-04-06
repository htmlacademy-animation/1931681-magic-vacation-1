import {
  getPosition,
  linearBezier,
  linearBezierPoint,
  quadraticBezierPoint
} from "../misc";

const START_POSITION = {
  x: getPosition(0.5),
  y: getPosition(0.5)
};

const MOVING_END_POSITION = {
  y: getPosition(1.5)
};


const ANIMATION_START_TIMING = 500;
const SCALE_END_TIMING = 850;
const MOOVING_START_ANIMATION = 1000;
const ANIMATION_END_TIMING = 1450;

function squareRootScaling(x) {
  return Math.sqrt((x - ANIMATION_START_TIMING) / 350);
}

function linearMovingOut(x) {
  return x / 450 - 20 / 9;
}

function positionTransition(time, destination) {
  if (time < ANIMATION_START_TIMING) {
    return START_POSITION;
  } else if (time < SCALE_END_TIMING) {
    const progress = squareRootScaling(time);

    return linearBezierPoint(progress,
        START_POSITION, destination
    );
  } else if (time < MOOVING_START_ANIMATION) {
    return destination;
  } else if (time < ANIMATION_END_TIMING) {
    const progress = linearMovingOut(time);

    const movingIntermediatePosition = {
      ...destination,
      y: destination.y + 0.10
    };

    return quadraticBezierPoint(progress,
        destination,
        movingIntermediatePosition,
        {...destination, ...MOVING_END_POSITION}
    );
  } else {
    return {...destination, ...MOVING_END_POSITION};
  }
}

function scaleTransition(time) {
  if (time < ANIMATION_START_TIMING) {
    return 0;
  } else if (time < SCALE_END_TIMING) {
    const progress = squareRootScaling(time);

    return linearBezier(progress, 0, 1);
  } else {
    return 1;
  }
}

function miscObjectAnimation(context, image, time, x, y, width, height) {
  context.save();

  const position = positionTransition(time, {x, y});
  const scale = scaleTransition(time);

  context.drawImage(image, position.x, position.y, width * scale, height * scale);

  context.fillRect(getPosition(START_POSITION.x), getPosition(START_POSITION.y), 5, 5);

  context.restore();
}

export {miscObjectAnimation};
