export default function createAndAppendCounter(selector, value) {
  document.querySelector(selector).innerText = value;
}
