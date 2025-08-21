// Sept 12, 2025 at 8:00 AM in Raleigh (EDT is UTC-4)
const target = Date.parse('2025-09-12T08:00:00-04:00');
// const target = Date.parse('2025-08-21T08:09:00-04:00');

const countdownEl = document.getElementById('countdown');
const liveEl = document.getElementById('live');
const elD = document.getElementById('elD');
const elH = document.getElementById('elH');
const elM = document.getElementById('elM');
const elS = document.getElementById('elS');

let timerId = null;

function render(d, h, m, s) {
  if (!elD || !elH || !elM || !elS) return;
  elD.textContent = d; // ✅ no zero padding on days
  elH.textContent = h.toString().padStart(2, '0');
  elM.textContent = m.toString().padStart(2, '0');
  elS.textContent = s.toString().padStart(2, '0');
}

function tick() {
  const now = Date.now();
  let diff = target - now;

  if (diff <= 0) {
    goLive();
    return;
  }

  const ms = Math.max(diff, 0);
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000) / 1000);

  render(days, hours, mins, secs);
}

function goLive() {
  clearInterval(timerId);

  setTimeout(() => {
    countdownEl.classList.add(
      'translate-transform',
      'duration-1500',
      '-translate-y-16',
      'translate-opacity',
      'opacity-0',
    );
    setTimeout(() => {
      liveEl.classList.remove('hidden');

      // (ensures the transition runs)
      void liveEl.offsetWidth;

      liveEl.classList.add('translate-transform', 'translate-opacity', 'duration-1500');
      liveEl.classList.remove('opacity-0', 'translate-y-16');
    }, 1500);
  }, 200);
}

window.addEventListener('load', () => {
  tick(); // show immediately
  timerId = setInterval(tick, 1000);
});
