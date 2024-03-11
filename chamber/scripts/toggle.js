const gridToggle = document.querySelector("#gridButton");
const listToggle = document.querySelector("#listButton");
const display = document.querySelector("article");

gridToggle.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listToggle.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});