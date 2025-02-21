const number = document.getElementById("number");
const guessBtn = document.getElementById("btnGuess");
const result = document.getElementById("result");

let rnd = Math.floor(Math.random() * 10 + 1);
console.log(rnd);

guessBtn.addEventListener("click", () => {
    var txt = number.value;

    if (txt == "") {
        result.innerText = "You Didn't Enter a Value";
        result.style.fontSize = "25px";
        result.style.backgroundColor = "red";
    }
    else if (txt > rnd) {
        result.innerText = "Guess Big";
        result.style.fontSize = "25px";
        result.style.backgroundColor = "2px solid rgb(184, 81, 102)";
    }
    else if (txt < rnd) {
        result.innerText = "Guess Small";
        result.style.fontSize = "25px";
        result.style.backgroundColor = "2px solid rgb(184, 81, 102)";
    }
    else {
        result.innerText = "Congratulations Correct Answer";
        result.style.fontSize = "25px";
        result.style.backgroundColor = "2px solid rgb(12, 134, 12)";
    }
})