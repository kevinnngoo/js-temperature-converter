const textBox = document.getElementById("textBox");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");

function convert() {
    let temp;

    // Celsius to Fahrenheit
    if (celsius.checked) {
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    // Fahrenheit to Celsius
    else if (fahrenheit.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C";
    } 
    else {
        result.textContent = "Select a unit";
    }
}
