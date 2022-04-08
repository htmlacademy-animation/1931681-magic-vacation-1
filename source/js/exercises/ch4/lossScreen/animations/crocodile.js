import {
  getPosition,
  linearBezierPoint
} from "../misc";

const START_MOOVING_TIMING = 600;
const END_MOOVING_TIMNING = 1150;

const START_POSITION = {
  x: 0.48,
  y: 0.00
};
const END_POSITION = {
  x: 0.13,
  y: 0.23
};

function clipKeyhole(context) {
  context.beginPath();

  context.moveTo(getPosition(0.441), getPosition(0.523), 5, 5);
  context.lineTo(getPosition(0.572), getPosition(0.525), 5, 5);
  context.lineTo(getPosition(0.604), getPosition(0.697), 5, 5);
  context.lineTo(getPosition(0.634), getPosition(0.767), 5, 5);
  context.lineTo(getPosition(0.148), getPosition(0.755), 5, 5);
  context.lineTo(getPosition(0.344), getPosition(0.538), 5, 5);

  context.arc(getPosition(0.508), getPosition(0.447), getPosition(0.10), 0, 2 * Math.PI);

  context.clip();
}

function linear(x) {
  return x / 550 - 12 / 11;
}

function positionTransition(time) {
  if (time < START_MOOVING_TIMING) {
    return {...START_POSITION};
  } else if (time < END_MOOVING_TIMNING) {
    const progress = linear(time);

    return linearBezierPoint(progress,
        START_POSITION, END_POSITION
    );
  } else {
    return {...END_POSITION};
  }
}

function crocodileAnimation(context, image, time, x, y, width, height) {
  context.save();

  clipKeyhole(context);
  const position = positionTransition(time);


  context.drawImage(image, getPosition(position.x), getPosition(position.y), width, height);

  context.restore();
}

export {crocodileAnimation};
