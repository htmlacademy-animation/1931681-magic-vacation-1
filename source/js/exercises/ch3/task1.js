window.addEventListener(`hashchange`, onHashChange);
window.addEventListener(`animationObjectLoad`, onAnimationObjectLoad);

const animationDescriptors = {
  primaryAward: {
    id: null,
    delay: 0
  },
  secondaryAward: {
    id: null,
    delay: 3800
  },
  additionalAward: {
    id: null,
    delay: 6200
  },
  victory: {
    id: null,
    delay: 0
  },
  victory2: {
    id: null,
    delay: 0
  },
  loss: {
    id: null,
    delay: 0
  }
};

function startAnimationsWithTimers(animationName) {
  switch (document.location.hash) {
    case `#prizes`:
    case `#game`:
      animationDescriptors[animationName].id = setTimeout(() => {
        initAnimation(animationName);

        animationDescriptors[animationName].id = null;
      }, animationDescriptors[animationName].delay);

      break;
    default:
      clearTimeout(animationDescriptors[animationName].id);
      animationDescriptors[animationName].id = null;
  }
}

function onAnimationObjectLoad(event) {
  const {animationName} = event.detail;

  startAnimationsWithTimers(animationName);
}

function onHashChange() {
  setTimeout(() => {
    startAnimationsWithTimers(`primaryAward`);
    startAnimationsWithTimers(`secondaryAward`);
    startAnimationsWithTimers(`additionalAward`);
  }, 500);
}

function initAnimation(animationName) {
  const objectWrapper = document.getElementById(animationName);
  if (objectWrapper && objectWrapper.contentDocument) {
    const svg = objectWrapper.contentDocument.getElementById(`animation`);
    const animation = objectWrapper.contentDocument.getElementById(`animationStart`);

    if (svg && animation) {
      svg.setCurrentTime(0);
      animation.endElement();
      animation.beginElement();
    }
  }
}
