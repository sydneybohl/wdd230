// Get Windchill 
let temperture = parseFloat(document.getElementById("temperture").innerText);
let windSpeed = parseFloat(document.getElementById("windSpeed").innerText);

function calculateWindChill(temperture, windSpeed) {
    if (temperture <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + (0.6215 * temperture) - (35.75 * windSpeed ** 0.16) + (0.4275 * temperture * (windSpeed ** 0.16))
        return `${windChill.toFixed(1)}°F`;
    }
    else {
        return "N/A";
    }
}

const windChill = calculateWindChill(temperture, windSpeed);

document.getElementById("windChill").innerText = windChill;