const iFrame = document.getElementById('speaker-wall');
const className = 'sz-speakers--wall';
const max = 10;
const padding = 25;

let iFrameDoc;
let timeout;
let count;
let checking;
let ready;

const startChecking = () => {
  count = 0;
  checking = false;
  ready = false;
  window.setTimeout(canCheck, 1500);
};

const canCheck = () => {
  if (count >= max || ready) {
    // console.log('Stop checking');
    return;
  }

  if (checking) {
    // console.count('Check in progress');
  } else {
    // console.count('OK to check iFrame');
    checkIFrame();
  }

  count++;
  timeout = window.setTimeout(canCheck, 500);
};

const checkIFrame = () => {
  checking = true;
  iFrameDoc = iFrame.contentDocument || iFrame.contentWindow.document;

  if (iFrameDoc.readyState === 'complete' && iFrameDoc.getElementsByClassName(className).length) {
    // console.count('iFrame is ready');
    window.clearTimeout(timeout);
    ready = true;
    resizeIFrame();
    return;
  }

  checking = false;
};

const resizeIFrame = () => {
  //   console.log('Resize iFrame');
  const walls = iFrameDoc.getElementsByClassName(className);
  //   console.log(walls);
  const wall = walls[0];
  //   console.log(wall);
  const height = wall.scrollHeight;
  //   console.log(height);
  const padded = height + padding;
  //   console.log(padded);
  const style = `height:${padded}px;`;
  //   console.log(style);
  iFrame.setAttribute('style', style);
  ['resize'].forEach((event) => {
    iFrameDoc.addEventListener(event, startChecking);
  });
};

['load', 'resize'].forEach((event) => {
  window.addEventListener(event, startChecking);
});
