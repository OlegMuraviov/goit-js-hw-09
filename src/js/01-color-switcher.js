import '../css/main.scss';
const refs = {
  body: document.querySelector('body'),
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;
refs.stop.setAttribute('disabled', true);

refs.body.addEventListener('click', event => {
  if (event.target.nodeName !== 'BUTTON') return;
  if (event.target.dataset.start !== undefined) {
    event.target.setAttribute('disabled', true);
    refs.stop.removeAttribute('disabled');
    timerId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  } else {
    refs.start.removeAttribute('disabled');
    refs.stop.setAttribute('disabled', true);

    clearInterval(timerId);
  }
});
