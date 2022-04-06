const ANIMATION_LINE_CLASSNAME = `text-animation-line`;
const ANIMATION_WORD_CLASSNAME = `text-animation-word`;
const ANIMATION_CHARACTER_CLASSNAME = `text-animation-character`;

function textNodeToAnimation(selector, wrapperCssClass) {
  const element = document.querySelector(selector);

  if (!element) {
    throw new Error(`Selector didn't match any DOM nodes: ${selector}`);
  }

  const text = element.innerHTML;
  element.innerText = ``;
  element.classList.add(wrapperCssClass);

  const lines = text.split(`<br>`);
  lines.forEach((line, lI) => {
    const lineEl = document.createElement(`span`);
    lineEl.classList.add(ANIMATION_LINE_CLASSNAME);

    const words = line.split(` `);
    words.forEach((word, wI) => {
      const wordEl = document.createElement(`span`);
      wordEl.classList.add(ANIMATION_WORD_CLASSNAME);

      const characters = word.split(``);
      characters.forEach((character) => {
        const charEl = document.createElement(`span`);
        charEl.innerText = character;
        charEl.classList.add(ANIMATION_CHARACTER_CLASSNAME);

        wordEl.appendChild(charEl);
      });

      lineEl.appendChild(wordEl);

      if (wI !== words.length - 1) {
        const spacebar = document.createElement(`span`);
        spacebar.innerText = ` `;
        lineEl.appendChild(spacebar);
      }
    });

    element.appendChild(lineEl);

    if (lI !== lines.length - 1) {
      const lineBreak = document.createElement(`br`);
      element.appendChild(lineBreak);
    }
  });
}

const animationDescriptors = [
  {
    selector: `#top > div.screen__wrapper > div > h1`,
    cssClass: `mysticalJourneyWordsAnimation`
  },
  {
    selector: `#top > div.screen__wrapper > div > div > div.intro__info > p.intro__label`,
    cssClass: `dateLabelWordsAnimation`
  },
  {
    selector: `#top > div.screen__wrapper > div > div > div.intro__info > p.intro__date`,
    cssClass: `dateWordsAnimation`
  },
  {
    selector: `#story > div > div.swiper-wrapper > div.slider__item.swiper-slide:nth-of-type(1) > h2`,
    cssClass: `storyWordsAnimation`
  },
  {
    selector: `#prizes > div.screen__wrapper > div > h2`,
    cssClass: `prizesWordsAnimation`
  },
  {
    selector: `#rules > div.screen__wrapper > div > h2`,
    cssClass: `rulesWordsAnimation`
  },
  {
    selector: `#game > div > div > div.game__header > h2`,
    cssClass: `gameWordsAnimation`
  }
];

animationDescriptors.forEach((descriptor) => textNodeToAnimation(descriptor.selector, descriptor.cssClass));
