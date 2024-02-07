const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {

        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        // populate the li elements textContent or innerHTML with the input value
        li.textContent = input.value;

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