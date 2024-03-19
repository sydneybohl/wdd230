// Get Current Dates 
const dateToday = new Date();
const currentDay = dateToday.getDay();

// Only Appear on Mondays, Tuesdays, and Wednesdays
if (currentDay >= 1 && currentDay <= 3) {
    document.querySelector("#alert-banner").style.display = "block";
} else {
    document.querySelector("#alert-banner").style.display = "none";
}

// Ability to Close Banner 
const closeBanner = document.querySelector("#close-banner");

closeBanner.addEventListener("click", () => {
    document.querySelector("#alert-banner").style.display = "none";
});