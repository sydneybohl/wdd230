// weather input to course home page

// select HTML elements in the document 
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// const variable named "url" and assign it with valid URL of openweathermap api 
const url = "https://api.openweathermap.org/data/2.5/weather?lat=42.89&lon=-87.86&units=imperial&appid=7d1799cb656dd7ec926774e34069fc68";

async function apiFetch() {
    try {
        // store results of the URL fetch into variable 
        const response = await fetch(url);
        // if response is OK, store result of response.json() conversion in a variable and 
        // output results to the console for testing
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only 
            displayResults(data);
        } else {
            // else, throw error using response.text()
            throw Error(await response.text());
        }
    } catch (error) {
        // finish off the catch block by outputting any try error to console 
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    let desc = capitalize(data.weather[0].description); // capitalize each word in weather description
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}

// write function that capitalize each word in the description (string)
function capitalize(string) {
    return string.replace(/\b\w/g, function (character) {
        return character.toUpperCase();
    });
}