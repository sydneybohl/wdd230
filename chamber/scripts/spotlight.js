// define the URL of the JSON file containing chamber member data
const dataURL = "https://sydneybohl.github.io/wdd230/chamber/data/members.json";

// asynchronous function to fetch and process the chamber member data
async function getMemberData() {
    try {
        // fetch the chamber member data from the URL
        const response = await fetch(dataURL);

        // convert the response into JSON format
        const data = await response.json();

        // filter the chamber members into gold, silver, and bronze arrays based on their membership level
        const goldMembers = data.members.filter(member => member.membership === 'Gold');
        const silverMembers = data.members.filter(member => member.membership === 'Silver');
        const bronzeMembers = data.members.filter(member => member.membership === 'Bronze');

        // randomly select a member from each membership level 
        const randomGold = Math.floor(Math.random() * goldMembers.length);
        const selectedGold = goldMembers[randomGold];

        const randomSilver = Math.floor(Math.random() * silverMembers.length);
        const selectedSilver = silverMembers[randomSilver];

        const randomBronze = Math.floor(Math.random() * bronzeMembers.length);
        const selectedBronze = bronzeMembers[randomBronze];

        // update HTML content for gold member
        const goldDiv = document.getElementById("gold-member");
        if (selectedGold) {
            goldDiv.innerHTML = `
               <h4>${selectedGold.name}</h4>
               <p>${selectedGold.description}</p>
               <p>Address: ${selectedGold.address}, ${selectedGold.city_state}</p>
               <p>Phone: ${selectedGold.phone}</p>
               <p><a href="${selectedGold.website}" target="_blank">${selectedGold.website}</a></p>
           `;
        }

        // update HTML content for silver member
        const silverDiv = document.getElementById("silver-member");
        if (selectedSilver) {
            silverDiv.innerHTML = `
                <h4>${selectedSilver.name}</h4>
                <p>${selectedSilver.description}</p>
                <p>Address: ${selectedSilver.address}, ${selectedSilver.city_state}</p>
                <p>Phone: ${selectedSilver.phone}</p>
                <p><a href="${selectedSilver.website}" target="_blank">${selectedSilver.website}</a></p>
            `;
        }

        // update HTML content for bronze member
        const bronzeDiv = document.getElementById("bronze-member");
        if (selectedBronze) {
            bronzeDiv.innerHTML = `
                    <h4>${selectedBronze.name}</h4>
                    <p>${selectedBronze.description}</p>
                    <p>Address: ${selectedBronze.address}, ${selectedBronze.city_state}</p>
                    <p>Phone: ${selectedBronze.phone}</p>
                    <p><a href="${selectedBronze.website}" target="_blank">${selectedBronze.website}</a></p>
                `;
        }
    } catch (error) {
        // log any errors that occur during the process
        console.error('Error fetching or processing member data:', error);
    }
}

// call the function
getMemberData();