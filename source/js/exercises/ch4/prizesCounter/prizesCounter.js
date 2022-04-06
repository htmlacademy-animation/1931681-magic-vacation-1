import createAndAppendCounter from "./dom";
import animationTick from "./animation";

function makeCounterStopper() {
  let stopper = null;

  return {
    set: (val) => {
      stopper = val;
    },
    get: () => stopper
  };
}

export default function initCounters() {
  let secondaryAwardCounterStopper = makeCounterStopper();
  let additionalAwardCounterStopper = makeCounterStopper();

  function startCounter(from, to, incrementBy, selector, counterStopper) {
    createAndAppendCounter(selector, from);
    let counterValue = from;

    counterStopper.set(animationTick(function drawFrame() {
      createAndAppendCounter(selector, counterValue);

      const prevCounterValue = counterValue;
      counterValue = Math.min(counterValue + incrementBy, to);
      if (prevCounterValue === counterValue) {
        counterStopper.get()();
      }
    }));
  }

  function onHashChange() {
    switch (document.location.hash) {
      case `#prizes`:
        setTimeout(() => startCounter(
            1, 7, 1,
            `#prizes > div.screen__wrapper > div > div.prizes__list > ul > li.prizes__item.prizes__item--cases > p > b`,
            secondaryAwardCounterStopper
        ), 5700);

        setTimeout(() => startCounter(
            11, 900, 174,
            `#prizes > div.screen__wrapper > div > div.prizes__list > ul > li.prizes__item.prizes__item--codes > p > b`,
            additionalAwardCounterStopper
        ), 7200);

        break;
      default:
        break;
    }
  }

  window.addEventListener(`hashchange`, onHashChange);

  onHashChange();
}
