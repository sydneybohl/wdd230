// Create a baseURL variable that references the root wdd230 repository, GitHub pages URL
const baseURL = "https://sydneybohl.github.io/wdd230/";

// Assign a variable named linksURL that references the links.json data file 
const linksURL = "https://sydneybohl.github.io/wdd230/data/links.json";

// Declare variable named "cards" that selects HTML div element
const lessonData = document.querySelector('#lesson-data');

// Asynchronous function to get links data in the links.json data file 
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const lessonHeader = document.createElement("h4");
        lessonHeader.textContent = `Lesson ${week.lesson}`;
        lessonData.appendChild(lessonHeader);

        const linksList = document.createElement("ul");

        week.links.forEach(link => {
            const li = document.createElement("li");
            const a = document.createElement("a");

            a.setAttribute("href", link.url);
            a.textContent = link.title;

            li.appendChild(a);
            linksList.appendChild(li);
        })
        lessonData.appendChild(linksList);
    });
}
getLinks();
