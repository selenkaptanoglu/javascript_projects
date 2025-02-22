const getMinutes = document.querySelector(".minute");
const getSecond = document.querySelector(".second");
const getTens = document.querySelector(".tens");
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const btnReset = document.querySelector(".btnReset");

let minute = 0;
let second = 0;
let tens = 0;
let interval;

btnStart.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(timer, 10);
});

btnStop.addEventListener("click", () => {
    clearInterval(interval);
});

btnReset.addEventListener("click", () => {
    clearInterval(interval);
    tens = "00";
    second = "00";
    minute = "00";
    updateDisplay();
});

function timer() {
    tens++;
    if (tens > 99) {
        second++;
        tens = 0;
    }
    if (second > 59) {
        minute++;
        second = 0;
    }
    updateDisplay();
}

function updateDisplay() {
    getMinutes.innerHTML = minute.toString().padStart(2, "0");
    getSecond.innerHTML = second.toString().padStart(2, "0");
    getTens.innerHTML = tens.toString().padStart(2, "0");
}