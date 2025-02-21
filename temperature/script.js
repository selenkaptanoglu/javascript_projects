let cel = document.getElementById("cel");
let fahre = document.getElementById("fahr");
let kelv = document.getElementById("kel");

function cellToFahr() {
    let fahrOutput = (parseFloat(cel.value) * 9 / 5) + 32;
    fahre.value = parseFloat(fahrOutput.toFixed(2));
}

function fahrToCell() {
    let cellOutput = (parseFloat(fahre.value) - 32) * 5 / 9;
    cel.value = parseFloat(cellOutput.toFixed(2));
}

function cellToKelv() {
    let kelvOutput = parseFloat(cel.value) + 273.15;
    kelv.value = parseFloat(kelvOutput.toFixed(2));
}

function kelvToCell() {
    let cellOutput = (parseFloat(kelv.value) - 273.15);
    cel.value = parseFloat(cellOutput.toFixed(2));
}
