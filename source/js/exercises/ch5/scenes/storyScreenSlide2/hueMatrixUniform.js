import {RAD_FACTOR} from "./misc";

const W = 1.0 / 3.0;
const SQRT_W = Math.sqrt(W);

function getHueMatrix(rotation) {
  const radRotation = RAD_FACTOR * rotation;
  const cosR = Math.cos(radRotation);
  const sinR = Math.sin(radRotation);

  const a00 = cosR + ((1.0 - cosR) * W);
  const a01 = (W * (1.0 - cosR)) - (SQRT_W * sinR);
  const a02 = (W * (1.0 - cosR)) + (SQRT_W * sinR);
  const a10 = (W * (1.0 - cosR)) + (SQRT_W * sinR);
  const a11 = cosR + (W * (1.0 - cosR));
  const a12 = (W * (1.0 - cosR)) - (SQRT_W * sinR);
  const a20 = (W * (1.0 - cosR)) - (SQRT_W * sinR);
  const a21 = (W * (1.0 - cosR)) + (SQRT_W * sinR);
  const a22 = cosR + (W * (1.0 - cosR));

  return [
    a00, a01, a02, 0.0,
    a10, a11, a12, 0.0,
    a20, a21, a22, 0.0,
    0.0, 0.0, 0.0, 1.0
  ];
}

function getKeyframes(keyframes, time) {
  const pastKeyframes = keyframes.filter(
      (keyframe) => keyframe.time <= time
  );
  const futureKeyframes = keyframes.slice(pastKeyframes.length, keyframes.length);

  const fromKeyframe = pastKeyframes[pastKeyframes.length - 1];
  const toKeyframe = futureKeyframes[0];

  return [fromKeyframe, toKeyframe];
}

const animationKeyframes = [
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
];

function getHueMatrixUniform(time) {
  const [fromKeyframe, toKeyframe] = getKeyframes(animationKeyframes, time);

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

export {getHueMatrixUniform};
