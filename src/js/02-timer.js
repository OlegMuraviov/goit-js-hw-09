import '../css/02-timer.scss';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  picker: document.querySelector('#datetime-picker'),
  start: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let selectedTime;
const timer = {
  start() {
    const timerId = setInterval(() => {
      let currentDiffrent = selectedTime - Date.now();
      if (currentDiffrent <= 1000) {
        clearInterval(timerId);
      }

      refs.start.setAttribute('disabled', true);
      refs.picker.setAttribute('disabled', true);

      const timeLeft = convertMs(currentDiffrent);

      refs.days.textContent = timeLeft.days;
      refs.hours.textContent = timeLeft.hours;
      refs.minutes.textContent = timeLeft.minutes;
      refs.seconds.textContent = timeLeft.seconds;
    }, 1000);
  },
};

refs.start.setAttribute('disabled', true);

refs.start.addEventListener('click', () => {
  timer.start();
});

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < new Date()) alert('Please choose a date in the future');
    else {
      refs.start.removeAttribute('disabled');
      selectedTime = selectedDates[0];
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = toPadStart(Math.floor(ms / day));
  // Remaining hours
  const hours = toPadStart(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = toPadStart(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = toPadStart(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function toPadStart(value) {
  return value.toString().padStart(2, 0);
}
