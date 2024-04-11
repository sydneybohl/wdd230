// Define the URL for the pricing JSON data
const pricingURL = "https://sydneybohl.github.io/wdd230/scoots/data/pricing.json";

// Function to fetch pricing data from the JSON file 
async function getPricing() {
    try {
        // Fetch data from the pricing URL
        const response = await fetch(pricingURL);

        // Check if response is successful
        if (!response.ok) {
            // If response is not ok, throw an error
            throw new Error('Failed to fetch pricing data: ' + response.statusText);
        }

        // Convert response data to JSON format
        const data = await response.json();

        // Call fillTable function with the rental data
        fillTable(data.Rental);
    } catch (error) {
        // Log any errors that occur during the fetch operation
        console.error(error);
    }
}

// Function to fill the table with rental data
function fillTable(data) {
    // Check if data is defined and is an array
    if (data && Array.isArray(data)) {
        // Get the table body element
        const tableBody = document.getElementById('rental-table').getElementsByTagName('tbody')[0];

        // go through each rental option in the data array
        data.forEach(function (option) {
            // Insert new row into the table
            const row = tableBody.insertRow();

            // fill the cells of the row with rental option data
            row.insertCell(0).textContent = option.Vehicle;
            row.insertCell(1).textContent = option.MaxPersons;
            row.insertCell(2).textContent = option.Reservation["HalfDay (3hrs)"];
            row.insertCell(3).textContent = option.Reservation["FullDay"];
            row.insertCell(4).textContent = option["Walk-In"]["HalfDay (3hrs)"];
            row.insertCell(5).textContent = option["Walk-In"]["FullDay"];
        });
    } else {
        // Log an error if data is undefined or not an array
        console.error("Data is undefined or not an array.");
    }
}

// Call the getPricing function to fetch and fill the table with pricing data
getPricing();