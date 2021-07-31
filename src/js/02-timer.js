

const refs = {
    input: document.querySelector('#date-selector'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector("button[data-stop]"),
    spanDay: document.querySelector('span[data-days]'),
    spanHour: document.querySelector('span[data-hours]'),
    spanMin: document.querySelector('span[data-minutes]'),
    spanSec: document.querySelector('span[data-seconds]')
}
  
let timerId = null;
const massages = "Please choose a date in the future"

refs.startBtn.addEventListener('click', onTimerStart);
refs.stopBtn.addEventListener('click', onTimerStop);


function onTimerStart() {
    
    
    timerId = setInterval(() => {
        const userTime = new Date(refs.input.value);
        const currentTime = new Date();
        const timeDifference = userTime.getTime() - currentTime.getTime();
        console.log(userTime)
        console.log(currentTime)
        console.log(timeDifference)
        
        if (timeDifference < 1000 || isNaN(timeDifference)) {
            clearInterval(timerId);

            alert(massages);
      
            return;
        }

        refs.startBtn.setAttribute('disabled', true);
        
        convertMs(timeDifference);
        
    }, 1000);
}

function onTimerStop() {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled')
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  appdateTimer(days, hours, minutes, seconds);
}



function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function appdateTimer(days, hours, minutes, seconds) {
    refs.spanDay.textContent = days;
    refs.spanHour.textContent = hours;
    refs.spanMin.textContent = minutes;
    refs.spanSec.textContent = seconds;
}

