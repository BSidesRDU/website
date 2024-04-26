const target = new Date('2024-09-13T08:00:00').getTime();

let initialized = false;
let diff = null;

let tsD = 0;
let tsH = 0;
let tsM = 0;
let tsS = 0;

let elD = document.getElementById('elD');
let elH = document.getElementById('elH');
let elM = document.getElementById('elM');
let elS = document.getElementById('elS');

const after = () => {
  return diff !== null && diff < 0;
};

const updateCountdownTimer = (stD, stH, stM, stS) => {
  if (after()) {
    elD.textContent = '0';
    elH.textContent = '00';
    elM.textContent = '00';
    elS.textContent = '00';
    return;
  }

  elD.textContent = stD;
  elH.textContent = stH;
  elM.textContent = stM;
  elS.textContent = stS;

  if (!initialized) {
    elD.innerHTML = "&nbsp;";
    elH.innerHTML = "&nbsp;";
    elM.innerHTML = "&nbsp;";
    elS.innerHTML = "&nbsp;";
    initialized = true;
  }
};

let interval = setInterval(() => {
  const now = new Date().getTime();
  diff = target - now;

  stD = Math.floor(diff / 86400000)
    .toString()
    .padStart(1, '0');
  stH = Math.floor((diff % 86400000) / 3600000)
    .toString()
    .padStart(2, '0');
  stM = Math.floor((diff % 3600000) / 60000)
    .toString()
    .padStart(2, '0');
  stS = Math.floor((diff % 60000) / 1000)
    .toString()
    .padStart(2, '0');

  updateCountdownTimer(stD, stH, stM, stS);

  if (diff <= 0) {
    clearInterval(interval);
  }
}, 1000);

window.onunload = () => {
  clearInterval(interval);
};
