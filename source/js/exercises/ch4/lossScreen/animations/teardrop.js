import {
  getPosition,
  linearBezier,
  linearBezierPoint
} from "../misc";

const ANIMATION_DELAY = 1750;

const ANIMATION_CYCLE = 1800;

const ANIMATION_SCALE_IN_KEYPOINT = 550;
const ANIMATION_WAIT_END_KEYPOINT = 750;
const ANIMATION_MOVE_STOP_KEYPOINT = 1050;
const ANIMATION_END_KEYPOINT = 1250;

const START_POSITION = {
  x: 0.465,
  y: 0.615
};
const END_POSITION = {
  x: 0.465,
  y: 0.635
};

function linearScaleShowing(x) {
  return x / 550;
}

function linearHiding(x) {
  return x / 200 - 21 / 4;
}

function linearPosition(x) {
  return x / 300 - 5 / 2;
}

function scaleTransition(time, width, height) {
  let scale;
  let transitionY = 0;

  if (time < 0) {
    scale = 0;
  } else if (time < ANIMATION_SCALE_IN_KEYPOINT) {
    const progress = linearScaleShowing(time);

    scale = linearBezier(progress, 0, 1);
  } else if (time < ANIMATION_MOVE_STOP_KEYPOINT) {
    scale = 1;
  } else if (time < ANIMATION_END_KEYPOINT) {
    const progress = linearHiding(time);

    scale = linearBezier(progress, 1, 0);
    transitionY = height * (1 - scale);
  } else {
    scale = 0;
  }

  const transitionX = width * (1 - scale) / 2;

  return [scale, transitionX, transitionY];
}

function opacityTransition(time) {
  if (time < ANIMATION_MOVE_STOP_KEYPOINT) {
    return 1;
  } else if (time < ANIMATION_END_KEYPOINT) {
    const progress = linearHiding(time);

    return linearBezier(progress, 1, 0);
  } else {
    return 0;
  }
}

function positionTransition(time) {
  if (time < ANIMATION_WAIT_END_KEYPOINT) {
    return {...START_POSITION};
  } else if (time < ANIMATION_MOVE_STOP_KEYPOINT) {
    const progress = linearPosition(time);

    return linearBezierPoint(progress,
        START_POSITION, END_POSITION
    );
  } else {
    return {...END_POSITION};
  }
}

function teardopAnimation(context, image, time, x, y, width, height) {
  const timeWithDelay = time - ANIMATION_DELAY;
  const timeInt = timeWithDelay < 0 ?
    timeWithDelay :
    timeWithDelay % ANIMATION_CYCLE;

  const [scale, scaleTransitionX, scaleTransitionY] = scaleTransition(timeInt, width, height);
  const opacity = opacityTransition(timeInt);
  const position = positionTransition(timeInt);

  context.save();
  context.globalAlpha = opacity;

  context.translate(getPosition(position.x) + scaleTransitionX, getPosition(position.y) + scaleTransitionY);
  context.scale(scale, scale);

  context.drawImage(image, 0, 0, width, height);

  context.restore();
}

export {teardopAnimation};
