import {staticDraw} from "./animations/staticDraw";
import {snowflakeAnimation} from "./animations/snowflake";
import {airplaneAnimation} from "./animations/airplane";
import {backgroundAnimation} from "./animations/background";
import {
  icebergAnimation,
  seaCalfAnimation
} from "./animations/icebergSeaCalf";
import {
  getPosition,
  getSize
} from "./misc";

const objects = [
  {
    image: null,
    path: null,
    animation: backgroundAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/victoryScreen/tree.png`,
    x: 0.581, y: 0.539,
    width: 0.040, height: 0.121,
    animation: staticDraw
  },
  {
    image: null,
    path: `img/exercises/chapter4/victoryScreen/tree 2.png`,
    x: 0.548, y: 0.496,
    width: 0.040, height: 0.142,
    animation: staticDraw
  },
  {
    image: null,
    path: `img/exercises/chapter4/victoryScreen/ice.png`,
    x: 0.359, y: 0.589,
    width: 0.298, height: 0.142,
    animation: icebergAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/victoryScreen/sea-calf-2.png`,
    x: 0.323, y: 0.383,
    width: 0.363, height: 0.426,
    animation: seaCalfAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/victoryScreen/airplane.png`,
    width: 0.097, height: 0.149,
    animation: airplaneAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/victoryScreen/snowflake.png`,
    x: 0.282, y: 0.496,
    width: 0.113, height: 0.156,
    animation: snowflakeAnimation
  },
  {
    image: null,
    path: `img/exercises/chapter4/victoryScreen/snowflake.png`,
    x: 0.597, y: 0.539,
    width: 0.153, height: 0.156,
    delay: 200,
    animation: snowflakeAnimation
  }
];

function getCanvas() {
  const canvas = document.getElementById(`victoryScreenCanvas`);
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
