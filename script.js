function calculate() {
    let V = document.getElementById("voltage").value;
    let I = document.getElementById("current").value;
    let R = document.getElementById("resistance").value;

    let result = document.getElementById("result");

    if (V && I && !R) {
        result.innerText = "Resistance (R) = " + (V / I).toFixed(2) + " Ω";
    } 
    else if (V && R && !I) {
        result.innerText = "Current (I) = " + (V / R).toFixed(2) + " A";
    } 
    else if (I && R && !V) {
        result.innerText = "Voltage (V) = " + (I * R).toFixed(2) + " V";
    } 
    else {
        result.innerText = "⚠️ Enter exactly TWO values!";
    }
}
function calculatePower() {
    let V = document.getElementById("p_voltage").value;
    let I = document.getElementById("p_current").value;
    let R = document.getElementById("p_resistance").value;

    let result = document.getElementById("powerResult");

    if (V && I && !R) {
        result.innerText = "Power (P) = " + (V * I).toFixed(2) + " W";
    } 
    else if (I && R && !V) {
        result.innerText = "Power (P) = " + (I * I * R).toFixed(2) + " W";
    } 
    else if (V && R && !I) {
        result.innerText = "Power (P) = " + ((V * V) / R).toFixed(2) + " W";
    } 
    else {
        result.innerText = "⚠️ Enter exactly TWO values!";
    }
}
function convertCurrent() {
    let mA = document.getElementById("ma").value;
    let A = document.getElementById("amp").value;
    let result = document.getElementById("unitResult");

    if (mA && !A) {
        result.innerText = (mA / 1000).toFixed(3) + " A";
    } 
    else if (A && !mA) {
        result.innerText = (A * 1000).toFixed(1) + " mA";
    } 
    else {
        result.innerText = "⚠️ Enter only one value for current!";
    }
}

function convertResistance() {
    let kOhm = document.getElementById("kohm").value;
    let Ohm = document.getElementById("ohm").value;
    let result = document.getElementById("unitResult");

    if (kOhm && !Ohm) {
        result.innerText = (kOhm * 1000).toFixed(2) + " Ω";
    } 
    else if (Ohm && !kOhm) {
        result.innerText = (Ohm / 1000).toFixed(3) + " kΩ";
    } 
    else {
        result.innerText = "⚠️ Enter only one value for resistance!";
    }
}
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => console.log("Service Worker Registered"));
  });
}