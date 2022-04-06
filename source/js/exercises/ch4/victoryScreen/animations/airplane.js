import {
  getPosition,
  quadraticBezier,
  quadraticBezierPoint
} from "../misc";

const CURVE_START = {
  x: 0.510,
  y: 0.400
};
const CURVE_END = {
  x: 0.746,
  y: 0.423
};
const CURVE_ANCHOR = {
  x: 0.680,
  y: 0.515
};

function linearOpacity(x) {
  return x / 350 - 6 / 7;
}
function linearPlaneTransitionStatus(x) {
  return x / 550 - 6 / 11;
}

function opacityTransition(time) {
  if (time < 300) {
    return 0;
  } else if (time < 650) {
    return linearOpacity(time);
  } else {
    return 1;
  }
}

function planeTransition(time) {
  let position;
  let rotation;

  if (time < 300) {
    position = {...CURVE_START};
    rotation = 85;
  } else if (time < 850) {
    const scale = linearPlaneTransitionStatus(time);

    position = quadraticBezierPoint(scale,
        CURVE_START, CURVE_ANCHOR, CURVE_END
    );
    rotation = quadraticBezier(scale,
        85, 85, 0
    );
  } else {
    position = {...CURVE_END};
    rotation = 0;
  }

  rotation = rotation * Math.PI / 180;

  return [position, rotation];
}

function airplaneAnimation(context, image, time, x, y, width, height) {
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  const opacity = opacityTransition(time);
  const [planePosition, planeRotation] = planeTransition(time);

  const rotationCenter = {
    x: getPosition(planePosition.x) + halfWidth,
    y: getPosition(planePosition.y) + halfHeight
  };
  const drawingPosition = {
    x: -halfWidth,
    y: -halfHeight
  };

  context.save();
  context.globalAlpha = opacity;

  context.translate(rotationCenter.x, rotationCenter.y);
  context.rotate(planeRotation);
  context.translate(drawingPosition.x, drawingPosition.y);

  context.drawImage(image, 0, 0, width, height);

  context.restore();
}

export {airplaneAnimation};
