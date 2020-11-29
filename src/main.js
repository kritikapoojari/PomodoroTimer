let timer;
let minute = 25;
let seconds = minute * 60;
let textSec = "60";
let breaktime = 05;
let display = document.getElementById("display");
display.innerHTML = minute + ":00";

let start = () => {
    let startSec = 60;
    timer = setInterval(() => {
        seconds--;
        if (startSec != 0) {
            startSec--;
        } else {
            startSec = 59;
        }

        if (startSec < 10) {
            textSec = "0" + startSec;
        } else {
            textSec = startSec;
        }
        display.innerHTML = Math.floor(seconds / 60) + ":" + textSec;
        if (seconds == 0) {
            clearInterval(timer);
        }
    }, 1000);
};

let stop = () => {
    clearInterval(timer);
};

let restart = () => {
    clearInterval(timer);
    display.innerHTML = minute + ":00";
    seconds = minute * 60;
};

let breakTime = () => {
    display.innerHTML = breaktime + ":00";
    seconds = breaktime * 60;
};