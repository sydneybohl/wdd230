
const year = new Date();
let fullyear = year.getFullYear();
document.getElementById("year").innerHTML = fullyear;

let date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = "Last Modified: " + date;