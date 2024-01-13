const year = new Date();
let fullyear = year.getFullYear();
document.getElementById("year").innerHTML = fullyear;

const date = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = date;