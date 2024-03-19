// forecast for the next few days 
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=43.30&lon=-87.99&units=imperial&appid=7d1799cb656dd7ec926774e34069fc68";

async function apiFetchFuture() {
    try {
        // store results of the URL fetch into variable 
        const response = await fetch(forecastURL);
        // if response is OK, store result of response.json() conversion in a variable and 
        // output results to the console for testing
        if (response.ok) {
            const forecastData = await response.json();
            // console.log(forecastData); // testing only 
            displayResults(forecastData); // Corrected function name
        } else {
            // else, throw error using response.text()
            throw Error(await response.text());
        }
    } catch (error) {
        // finish off the catch block by outputting any try error to console 
        console.log(error);
    }
}

// call fucntion to fetch future forecast data
apiFetchFuture();

function displayResults(forecastData) {
    // loop through each forecast data day 
    for (let i = 0; i < forecastData.list.length; i++) {
        // create div element for each forecast data day 
        const div = document.createElement("div");
        // obtain forecast data
        const forecast = forecastData.list[i];
        // check if time sets for the next day
        if (forecast.dt_txt.includes("21:00")) {
            // creates divs to display temperature, date, icon, and weather description
            const temp = document.createElement('p');
            temp.innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F`;

            const date = document.createElement('p');
            const dateformat = forecast.dt_txt.substring(0, 10);
            date.innerHTML = `${dateformat}`;

            const icon = document.createElement('img');
            const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

            const description = document.createElement('p');
            let desc = capitalize(forecast.weather[0].description); // capitalize each word in weather description

            icon.setAttribute('src', iconsrc);
            icon.setAttribute("alt", desc)
            description.textContent = desc;


            div.appendChild(date);
            div.appendChild(icon);
            div.appendChild(temp);
            div.appendChild(description);

            // append the div elements to the weather forecast section 
            document.getElementById('weather-forecast').appendChild(div);
        }
    }
}

// function that capitalize each word in the description (string)
function capitalize(string) {
    return string.replace(/\b\w/g, function (character) {
        return character.toUpperCase();
    });
}