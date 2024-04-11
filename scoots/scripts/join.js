document.addEventListener("DOMContentLoaded", function () {
    var timestamp = document.getElementById('timestamp');
    if (timestamp) {
        // Set timestamp to the current date
        timestamp.value = Date.now();
        console.log(timestamp);
    }
});