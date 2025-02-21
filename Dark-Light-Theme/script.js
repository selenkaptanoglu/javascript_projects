const ball = document.getElementById("ball");
ball.addEventListener("click", changeTheme);


let leftSide = true;
let rightSide;

function changeTheme() {
    if (leftSide == true) {
        ball.style.left = "110px";
        ball.style.backgroundColor = "#111";
        leftSide = false;
        document.querySelector(".mode").style.backgroundColor = "#fff";
        document.querySelector("body").style.backgroundColor = "#111";
    } else {
        ball.style.left = "10px";
        ball.style.backgroundColor = "#fff";
        document.querySelector(".mode").style.backgroundColor = "#111";
        document.querySelector("body").style.backgroundColor = "#fff";
    }
}