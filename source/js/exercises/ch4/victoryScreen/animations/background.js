import {
  getPosition,
  linearBezierPoint,
  quadraticBezierPoint
} from "../misc";

const FILL_COLOR = `rgb(176, 199, 255)`;
const ANIMATION_START_TIMING = 300;
const ANIMATION_END_TIMING = 850;

const CIRCLE_END = {
  x: 0.468,
  y: 0.574
};

const CURVE_START = {
  x: 0.517,
  y: 0.458
};
const CURVE_SEPARATION_POINT = {
  x: 0.772,
  y: 0.526
};
const CURVE_END = {
  x: 0.449,
  y: 0.700
};

const FIRST_CURVE_ANCHOR = {
  x: 0.578,
  y: 0.481
};
const FIRST_CURVE_ANCHOR2 = {
  x: 0.700,
  y: 0.576
};

const SECOND_CURVE_ANCHOR = {
  x: 0.661,
  y: 0.724
};
const SECOND_CURVE_ANCHOR2 = {
  x: 0.511,
  y: 0.705
};

function linearOpacity(x) {
  return x / 350 - 6 / 7;
}

function linearScale(x) {
  return x / 550 - 6 / 11;
}

function squareRootScale(x) {
  return Math.sqrt((x - 300) / 550);
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

function scaleTransition(time) {
  if (time < ANIMATION_START_TIMING) {
    return 0;
  } else if (time < ANIMATION_END_TIMING) {
    return linearScale(time);
  } else {
    return 1;
  }
}

function circleTransition(time) {
  if (time < ANIMATION_START_TIMING) {
    return {...CURVE_START};
  } else if (time < ANIMATION_END_TIMING) {
    const scale = linearScale(time);

    return linearBezierPoint(scale,
        CURVE_START, CIRCLE_END
    );
  } else {
    return {...CIRCLE_END};
  }
}

function firstCurveTransition(time) {
  let anchor;
  let anchor2;
  let end;

  if (time < ANIMATION_START_TIMING) {
    anchor = {...CURVE_START};
    anchor2 = {...CURVE_START};
    end = {...CURVE_START};
  } else if (time < ANIMATION_END_TIMING) {
    const scale = linearScale(time);
    const scale2 = squareRootScale(time);

    anchor = linearBezierPoint(scale,
        CURVE_START, FIRST_CURVE_ANCHOR
    );
    anchor2 = linearBezierPoint(scale2,
        CURVE_START, FIRST_CURVE_ANCHOR2
    );
    end = quadraticBezierPoint(scale2,
        CURVE_START, anchor2, CURVE_SEPARATION_POINT
    );
  } else {
    anchor = {...FIRST_CURVE_ANCHOR};
    anchor2 = {...FIRST_CURVE_ANCHOR2};
    end = {...CURVE_SEPARATION_POINT};
  }

  return [anchor, anchor2, end];
}

function secondCurveTransition(time) {
  let anchor;
  let anchor2;
  let end;

  if (time < ANIMATION_START_TIMING) {
    anchor = {...CURVE_START};
    anchor2 = {...CURVE_START};
    end = {...CURVE_START};
  } else if (time < ANIMATION_END_TIMING) {
    const scale = linearScale(time);

    anchor = linearBezierPoint(scale,
        CURVE_START, SECOND_CURVE_ANCHOR
    );
    anchor2 = linearBezierPoint(scale,
        CURVE_START, SECOND_CURVE_ANCHOR2
    );
    end = linearBezierPoint(scale,
        CURVE_START, CURVE_END
    );
  } else {
    anchor = {...SECOND_CURVE_ANCHOR};
    anchor2 = {...SECOND_CURVE_ANCHOR2};
    end = {...CURVE_END};
  }

  return [anchor, anchor2, end];
}

function backgroundAnimation(context, image, time) {
  context.save();

  const opacity = opacityTransition(time);
  const scale = scaleTransition(time);

  const circleCenter = circleTransition(time);
  const [firstCurveAnchor, firstCurveAnchor2, firstCurveEnd] = firstCurveTransition(time);
  const [secondCurveAnchor, secondCurveAnchor2, secondCurveEnd] = secondCurveTransition(time);

  context.fillStyle = FILL_COLOR;
  context.globalAlpha = opacity;
  context.beginPath();

  context.arc(
      getPosition(circleCenter.x), getPosition(circleCenter.y),
      getPosition(scale * 0.127),
      0, 2 * Math.PI
  );
  context.moveTo(
      getPosition(CURVE_START.x), getPosition(CURVE_START.y)
  );
  context.bezierCurveTo(
      getPosition(firstCurveAnchor.x), getPosition(firstCurveAnchor.y),
      getPosition(firstCurveAnchor2.x), getPosition(firstCurveAnchor2.y),
      getPosition(firstCurveEnd.x), getPosition(firstCurveEnd.y)
  );
  context.bezierCurveTo(
      getPosition(secondCurveAnchor.x), getPosition(secondCurveAnchor.y),
      getPosition(secondCurveAnchor2.x), getPosition(secondCurveAnchor2.y),
      getPosition(secondCurveEnd.x), getPosition(secondCurveEnd.y)
  );

  context.fill();
  context.restore();
}

export {backgroundAnimation};
