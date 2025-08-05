
function convert() {
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    if (hours.value === "") {
        alert("Enter a valid Hours");
    }
    if (minutes.value === "") {
        alert("Enter a valid Minutes");
    }
    secondAns = (parseInt(hours.value) * 3600) + (parseInt(minutes.value) * 60);
    document.getElementById("seconds").textContent = secondAns + "  Seconds";
}
