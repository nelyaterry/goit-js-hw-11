const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}



function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



refs.startBtn.addEventListener('click', onStartChangeColor);
refs.stopBtn.addEventListener('click', onStopChangeColor);

let timerId = null;



function onStartChangeColor () {
    timerId = setInterval(() => {
    toChangeBgColor();
  }, 1000);
    
}

function onStopChangeColor () {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled');
};

function toChangeBgColor () {
    refs.body.style.backgroundColor = `${getRandomHexColor()}`;
    refs.startBtn.setAttribute('disabled', true);
    console.log('changing colors');
};