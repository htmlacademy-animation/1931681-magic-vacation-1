const counterWrapperEl = document.querySelector(`#game > div > div > div.game__header`);

export default function createAndAppendTimeTag(time) {
  const s = Math.floor(time / 1000) % 60;
  const m = Math.floor(time / (1000 * 60));

  const minSpan = document.createElement(`span`);
  minSpan.innerText = `${m}`.padStart(2, `0`);

  const divider = document.createTextNode(`:`);

  const secSpan = document.createElement(`span`);
  secSpan.innerText = `${s}`.padStart(2, `0`);

  const counterEl = document.createElement(`div`);
  counterEl.classList.add(`game__counter`);
  counterEl.appendChild(minSpan);
  counterEl.appendChild(divider);
  counterEl.appendChild(secSpan);

  counterWrapperEl.removeChild(counterWrapperEl.children[1]);
  counterWrapperEl.appendChild(counterEl);
}
