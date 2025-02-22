const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
const minus = document.getElementById("minus");
const output = document.getElementById("result");

let score = 0;

plus.addEventListener("click", () => {
    score++;
    output.innerHTML = score;
    if (score >= 1) {
        output.style.color = "rgb(113, 182, 113)";
    }
    else if (score == 0) {
        output.style.color = "rgb(126, 113, 182)";
    }
})

minus.addEventListener("click", () => {
    score--;
    output.innerHTML = score;
    if (score < 1) {
        output.style.color = "rgb(182, 113, 122);";
    }
    else if (score == 0) {
        output.style.color = "rgb(126, 113, 182)";
    }
})

reset.addEventListener("click", () => {
    score = 0;
    output.style.color = "rgb(126, 113, 182)";
    output.innerHTML = score;
})