const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
let chaptersArray = getChapterList() || [];


chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    // populate the li elements textContent or innerHTML with the input value
    li.textContent = item;

    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");

    // append the li element with the delete button
    li.append(deleteButton);

    list.append(li);

    // add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

    // send the focus to the input element
    input.focus();

    // change input value to nothing or to an empty string to clean up the interface for the user
    input.value = "";
};

function setChapterList() {
    localStorage.setItem("myFavBookofMormonList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBookofMormonList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
