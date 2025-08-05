let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");
let resultMsgEl = document.getElementById("resultMsg");

let selectedCity = '';




cityHyderabadEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityChennaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityDelhiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});
cityMumbaiEl.addEventListener("change", function(event) {
    selectedCity = event.target.value;
});



questionsFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (selectedCity === "delhi") {
        resultMsgEl.textContent = "Correct Answer";
        resultMsgEl.style.color = "green";
    } else if (selectedCity === "") {
        resultMsgEl.textContent = "Please select the answer!";
        resultMsgEl.style.color = "red";
    } else {
        resultMsgEl.textContent = "Wrong Answer";
        resultMsgEl.style.color = "red";
    }
});