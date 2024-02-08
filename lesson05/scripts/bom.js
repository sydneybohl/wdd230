const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        // capital the first letter of the input value
        let word = input.value
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        // populate the li elements textContent or innerHTML with the input value
        li.textContent = capWord;

        deleteButton.textContent = "❌";

        // append the li element with the delete button
        li.append(deleteButton);

        list.append(li);

        // add an event listener to the delete button that removes the li element when clicked
        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });

        // send the focus to the input element
        input.focus();

        // change input value to nothing or to an empty string to clean up the interface for the user
        input.value = "";
    }

});

// add a function to allow the Enter key to add input to list
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        let word = input.value
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

        li.textContent = capWord;

        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = "";
    }
});