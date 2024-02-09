const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const body = document.querySelector("body");
const weather = document.querySelector("#weather");
const events = document.querySelector("#events");
const spot1 = document.querySelector("#spotlight-one");
const spot2 = document.querySelector("#spotlight-two");
const spot3 = document.querySelector("#spotlight-three");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        body.style.background = "#000";
        main.style.color = "#fff";

        weather.style.background = "#000"
        events.style.background = "#000"
        spot1.style.background = "#000"
        spot2.style.background = "#000"
        spot3.style.background = "#000"

        weather.style.border = "1px solid #D5E1E9"
        events.style.border = "1px solid #D5E1E9"
        spot1.style.border = "1px solid #D5E1E9"
        spot2.style.border = "1px solid #D5E1E9"
        spot3.style.border = "1px solid #D5E1E9"

        modeButton.textContent = "🔆";
    } else {
        body.style.background = "#fff";
        main.style.color = "#000";

        weather.style.background = "#D5E1E9"
        events.style.background = "#D5E1E9"
        spot1.style.background = "#D5E1E9"
        spot2.style.background = "#D5E1E9"
        spot3.style.background = "#D5E1E9"

        modeButton.textContent = "🌑";
    }
});
