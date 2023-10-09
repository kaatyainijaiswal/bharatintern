// Function to convert temperature
function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const unit = document.getElementById("unit").value;
    let result = "";

    if (unit === "celsius") {
        const fahrenheit = (temperatureInput * 9/5) + 32;
        const kelvin = temperatureInput + 273.15;
        result = `Fahrenheit: ${fahrenheit.toFixed(2)}°F, Kelvin: ${kelvin.toFixed(2)}K`;
    } else if (unit === "fahrenheit") {
        const celsius = (temperatureInput - 32) * 5/9;
        const kelvin = (temperatureInput - 32) * 5/9 + 273.15;
        result = `Celsius: ${celsius.toFixed(2)}°C, Kelvin: ${kelvin.toFixed(2)}K`;
    } else if (unit === "kelvin") {
        const celsius = temperatureInput - 273.15;
        const fahrenheit = (temperatureInput - 273.15) * 9/5 + 32;
        result = `Celsius: ${celsius.toFixed(2)}°C, Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    }

    document.getElementById("result").textContent = result;
}

// Function to reset fields
function resetFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("unit").selectedIndex = 0;
    document.getElementById("result").textContent = "";
}