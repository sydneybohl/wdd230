const password = document.querySelector("#password");
const passwordTwo = document.querySelector("#passwordTwo");
const pwdmessage = document.querySelector("#pwdmessage");

// Add an event listener to check if both passwords are the same when the user clicks out of second password field
passwordTwo.addEventListener("focusout", checkSame);

function checkSame() {
    // If both passwords don't match
    if (password.value !== passwordTwo.value) {
        pwdmessage.textContent = "Password does not match previously entered password.";
        pwdmessage.style.visibility = "show";
        // Color passwordTwo background
        passwordTwo.style.backgroundColor = "lightyellow";
        // Empty out the first password field
        password.value = "";
        // Empty out the second password field
        passwordTwo.value = "";
        // Put the focus back to the first password field 
        password.focus();
    } else {
        // Do not display the error message and color background
        pwdmessage.style.display = "none";
        passwordTwo.style.backgroundColor = "white";
        passwordTwo.style.color = "black";
    }
}

const rangeValue = document.querySelector("#rangeValue");
const range = document.querySelector("#range");

range.addEventListener("change", displayRatingValue);

function displayRatingValue() {
    rangeValue.textContent = range.value;
}