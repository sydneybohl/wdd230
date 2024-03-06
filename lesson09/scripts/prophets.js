// JSON Data 
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare variable named "cards" that selects HTML div element
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);

    // Convert the response to a JSON object using the .json method
    const data = await response.json();

    // Add a console.table() expression to check the data response at this point
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    // Create forEach loop with the array parameter to process each prophet record
    // one at a time, creating a new card each time
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        // Extra info of birth date and birth place 
        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");

        // Build the h2 element out to show the prophet's full name using template string
        fullName.textContent = `${prophet.name} ${prophet.lastname}`

        // Build template strings for birth date and birth place 
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attributes 
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        // Use appendChild() to append the section with the heading and image elements
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        // Add the section care to the div "cards" that was written in the beginning of the file
        cards.appendChild(card);
    })
}

// Call the function 
getProphetData();