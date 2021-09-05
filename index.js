const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const bodyEl = document.querySelector('body');
const btnStartEl = document.querySelector('button[data-action="start"]');
const btnStoptEl = document.querySelector('button[data-action="stop"]');

btnStartEl.addEventListener('click', onBtnStartClick);
btnStoptEl.addEventListener('click', onBtnStopClick);


CHANGE_COLOR_INTERVAL = 1000;
let timerId = 'null';
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = function (colors, randomIntegerFromInterval){
   return colors[randomIntegerFromInterval(0, colors.length - 1)]
};

const changeColor = function (){ bodyEl.style.backgroundColor = randomColor(colors, randomIntegerFromInterval)};



function onBtnStartClick() {
    timerId = setInterval(changeColor, CHANGE_COLOR_INTERVAL);
     btnStartEl.disabled = true;
        
};

function onBtnStopClick() {

    clearInterval(timerId);
    // bodyEl.removeAttribute('style');
    btnStartEl.disabled = false;

 };


