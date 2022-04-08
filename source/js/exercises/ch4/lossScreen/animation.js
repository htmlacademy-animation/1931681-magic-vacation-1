import {keyholeAnimation} from "./animations/keyhole";
import {miscObjectAnimation} from "./animations/miscObject";
import {crocodileAnimation} from "./animations/crocodile";
import {teardopAnimation} from "./animations/teardrop";
import {
  getPosition,
  getSize
} from "./misc";

const objects = [
  {
    image: null,
    path: `img/exercises/chapter4/lossScreen/key.png`,
    x: 0.406, y: 0.348,
    width: 0.2, height: 0.35,
    animation: keyholeAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/lossScreen/crocodile.png`,
    width: 0.75, height: 0.75,
    animation: crocodileAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/lossScreen/drop.png`,
    width: 0.042, height: 0.069,
    animation: teardopAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/lossScreen/flamingo.png`,
    x: 0.107, y: 0.407,
    width: 0.188, height: 0.188,
    animation: miscObjectAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/lossScreen/leaf.png`,
    delay: 40,
    x: 0.845, y: 0.321,
    width: 0.149, height: 0.186,
    animation: miscObjectAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/lossScreen/saturn.png`,
    delay: 35,
    x: 0.843, y: 0.743,
    width: 0.164, height: 0.135,
    animation: miscObjectAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/lossScreen/snowflake.png`,
    delay: 20,
    x: 0.679, y: 0.543,
    width: 0.129, height: 0.161,
    animation: miscObjectAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/lossScreen/watermelon.png`,
    delay: 55,
    x: 0.0, y: 0.700,
    width: 0.173, height: 0.161,
    animation: miscObjectAnimation
  }
];

function getCanvas() {
  const canvas = document.getElementById(`lossScreenCanvas`);
  const context = canvas.getContext(`2d`);

  return {canvas, context};
}

function drawObject(context, object, time) {
  const {
    image, x, y, width, height, animation, delay = 0
  } = object;

  animation(
      context,
      image,
      time + delay,
      x ? getPosition(x) : null,
      y ? getPosition(y) : null,
      width ? getPosition(width) : null,
      height ? getPosition(height) : null
  );
}

function initCanvasSize(canvas) {
  function updateSize() {
    const size = getSize();

    canvas.width = size;
    canvas.height = size;
  }

  window.addEventListener(`resize`, updateSize);
  window.addEventListener(`hashchange`,
      () => window.removeEventListener(`resize`, updateSize),
      {once: true}
  );

  updateSize();
}

async function prepareScene() {
  const imagesCache = {};

  for (let i = 0; i !== objects.length; i++) {
    const object = objects[i];

    await new Promise((resolve) => {
      const img = new Image();

      if (!object.path) {
        resolve();
      } else if (imagesCache[object.path]) {
        object.image = imagesCache[object.path];

        resolve();
      } else {
        img.src = object.path;

        img.addEventListener(`load`, function onImageLoad() {
          object.image = img;
          imagesCache[object.path] = img;

          resolve();
        });
      }
    });
  }
}

function drawScene(canvas, context, animationTick) {
  animationTick((time) => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();

    // objects[2].x = window.xCoord;
    // objects[2].y = window.yCoord;

    objects.forEach((object) => drawObject(context, object, time));

    context.restore();
  });
}

async function scene(animationTick) {
  const {canvas, context} = getCanvas();
  initCanvasSize(canvas);
  await prepareScene();

  drawScene(canvas, context, animationTick);
}

export {scene};
