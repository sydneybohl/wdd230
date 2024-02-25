// Select displayVisits element 
const displayVisits = document.querySelector(".displayVisits");

const currentDate = new Date(); // Gives the current date and time 

// Retrieves the number of previous visits
const lastVisit = Number(localStorage.getItem("lastVisitDate")) || 0;

// Find the difference between the current date and the date of last visit
const timeDiff = currentDate.getTime() - lastVisit;

if (lastVisit === 0) {
    displayVisits.textContent = "Welcome! Let us know if you have any questions.";
} else if (timeDiff <= 0) {
    displayVisits.textContent = "Back so soon! Awesome!";
} else {
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert time to amount of days

    if (daysDiff <= 2) {
        displayVisits.textContent = "You last visited 1 day ago.";
    } else {
        displayVisits.textContent = `You last visited ${daysDiff} days ago.`;
    }
}

// Store the current date into the localStorage
window.localStorage.setItem("lastVisitDate", currentDate.getTime());

