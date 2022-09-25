const target = new Date('2022-10-15T08:00:00').getTime();
let diff = null;
let initialized = 0;

let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

const tickingTimeBomb = document.querySelector(
  '.countdown-timer__ticking-time-bomb--time'
);
const icon = document.querySelector(
  '.countdown-timer__ticking-time-bomb--icon'
);
const until = document.querySelector('.countdown-timer__until');
const bsides = document.querySelector('.countdown-timer__bsides');
const untilText = 'Until BSides RDU 2022!';
const itsTimeText = 'Time for BSides RDU 2022!';
const iconText = '⏰';

const isDone = () => {
  return diff !== null && diff < 0;
};

const updateCountdownTimer = (days, hours, minutes, seconds) => {
  if (isDone()) {
    tickingTimeBomb.textContent = '';
    until.textContent = '';
    bsides.textContent = itsTimeText;
    bsides.classList.toggle('countdown-timer__bsides--its-time');
    return;
  }

  tickingTimeBomb.textContent = `${days}:${hours}:${minutes}:${seconds}`;

  if (!initialized) {
    icon.textContent = iconText;
    until.textContent = untilText;
    initialized = true;
  }
};

let interval = setInterval(() => {
  const now = new Date().getTime();
  diff = target - now;

  days = Math.floor(diff / 86400000)
    .toString()
    .padStart(2, '0');
  hours = Math.floor((diff % 86400000) / 3600000)
    .toString()
    .padStart(2, '0');
  minutes = Math.floor((diff % 3600000) / 60000)
    .toString()
    .padStart(2, '0');
  seconds = Math.floor((diff % 60000) / 1000)
    .toString()
    .padStart(2, '0');

  updateCountdownTimer(days, hours, minutes, seconds);

  if (diff <= 0) {
    clearInterval(interval);
  }
}, 1000);

window.onunload = () => {
  clearInterval(interval);
};
