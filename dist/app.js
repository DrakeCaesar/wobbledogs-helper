"use strict";
// Fetching and rendering logic goes here
document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
        console.log(data); // Implement rendering logic based on your app's design
    });
});
