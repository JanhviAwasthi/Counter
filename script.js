let temperatureInput = document.getElementById("temperatureInput");
let celsiusRadio = document.getElementById("celsius");
let fahrenheitRadio = document.getElementById("fahrenheit");
let convertButton = document.getElementById("convertButton");
let result = document.getElementById("result");

convertButton.addEventListener("click", function() {
    let temperature = parseFloat(temperatureInput.value);
    if (isNaN(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    if (celsiusRadio.checked) {
        let fahrenheit = (temperature * 9/5) + 32;
        result.textContent = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F.`;
    } else if (fahrenheitRadio.checked) {
        let celsius = (temperature - 32) * 5/9;
        result.textContent = `${temperature}°F is equal to ${celsius.toFixed(2)}°C.`;
    }
});