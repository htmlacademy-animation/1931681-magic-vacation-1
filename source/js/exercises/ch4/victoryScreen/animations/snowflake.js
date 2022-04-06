function sigmoid(x, xShift, xStretch, yStretch) {
  return yStretch / (1 + Math.exp(xStretch * (xShift + x)));
}

function linear(x) {
  return (1 / 500) * x - 7 / 5;
}

function opacityTransition(time) {
  if (time < 700) {
    return 0;
  } else if (time < 1200) {
    return linear(time);
  } else {
    return 1;
  }
}

function yShiftTransition(time) {
  const timeInt = time % 2000;

  if (timeInt <= 1000) {
    return sigmoid(-timeInt, 500, 0.01, 10);
  } else {
    return sigmoid(timeInt, -1500, 0.01, 10);
  }
}

function snowflakeAnimation(context, image, time, x, y, width, height) {
  const opacity = opacityTransition(time);
  const yShift = yShiftTransition(time);

  context.save();
  context.globalAlpha = opacity;

  context.drawImage(image, x, y + yShift, width, height);

  context.restore();
}

export {snowflakeAnimation};
