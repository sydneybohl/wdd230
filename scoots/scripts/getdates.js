
const year = new Date();
let fullyear = year.getFullYear();
document.getElementById("year").innerHTML = fullyear;

let date = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modified: " + date;