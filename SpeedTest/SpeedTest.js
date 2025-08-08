let resultEl = document.getElementById("result");
let subEl = document.getElementById("sub");
let resEl = document.getElementById("res");
let timerEl = document.getElementById("timerEl");
let quoteEl = document.getElementById("quote")
let startEl = document.getElementById("start");
let spinner = document.getElementById("spinner");
let inputEl = document.getElementById("input");
var timeLine;
let inputVal;
let countdown = 0;
let options = {
    method: "GET"
}


function generateQuote() {
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            spinner.classList.remove("d-none");
            quoteEl.textContent = jsonData.content;
        });

    timeLine = setInterval(() => {
        countdown += 1;
        timerEl.textContent = countdown;
    }, 1000);
}
function resetAction() {
    // inputVal = inputEl.value;
    // inputVal.textContent = "";
    generateQuote()
    countdown = 0;


}
function submitAction(event) {
    // inputVal = inputEl.value;
    if (quoteEl.textContent === inputEl.value) {
        clearInterval(timeLine);
        resultEl.textContent = "You are Typed in " + countdown + " Seconds";
    }
    else {
        resultEl.textContent = "You are entered Incorrect text";
    }
};
generateQuote();
subEl.addEventListener("click", submitAction)
resEl.addEventListener('click', resetAction)

// startEl.addEventListener("click", startAction)
