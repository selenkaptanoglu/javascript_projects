window.onload = function getTime() {

    var time = new Date()

    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    var day = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;


    document.getElementById("hour").innerText = hour + ":";
    document.getElementById("minute").innerText = minute + ":";
    document.getElementById("second").innerText = second;

    document.getElementById("date").innerText = day + "/" + month + "/" + year;

    var inter = setInterval(getTime, 1000);
}