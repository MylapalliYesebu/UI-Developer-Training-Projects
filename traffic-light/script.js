// script.js

const redLight = document.querySelector('.red');
const yellowLight = document.querySelector('.yellow');
const greenLight = document.querySelector('.green');

const stopBtn = document.getElementById('stopBtn');
const readyBtn = document.getElementById('readyBtn');
const goBtn = document.getElementById('goBtn');

function resetLights() {
    redLight.style.backgroundColor = '#555';
    yellowLight.style.backgroundColor = '#555';
    greenLight.style.backgroundColor = '#555';
}

stopBtn.addEventListener('click', () => {
    resetLights(); // turn off all lights
    redLight.style.backgroundColor = 'red'; 
    document.body.style.backgroundColor = '#ffcccc'; 
});

readyBtn.addEventListener('click', () => {
    resetLights();
    yellowLight.style.backgroundColor = 'yellow';
    document.body.style.backgroundColor = '#fff5cc';
});

goBtn.addEventListener('click', () => {
    resetLights();
    greenLight.style.backgroundColor = 'green';
    document.body.style.backgroundColor = '#ccffcc'; 
});
