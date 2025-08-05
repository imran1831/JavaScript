function start() {
    let inputEl = document.querySelector(".inp");
    let timeCount = document.getElementById("TimeCount");
    let countdown = 10;
    document.getElementById("bgc").style.backgroundColor="cyan";
    let timer = setInterval(function (){
        countdown = countdown - 1;
        timeCount.innerText = countdown;
        if (countdown === 0) {
            timeCount.textContent = "BOOM!!";
            clearInterval(timer);
            document.getElementById("blast").src="Blast.png";
            document.getElementById("bgc").style.backgroundColor="red";
        }
    }, 1000);
    inputEl.addEventListener("keydown",function(event){
        if(event.key==="Enter" && inputEl.value==="defuser" && countdown!==0){
            timeCount.textContent = "Hurray!! You did it!!!🥳🎉";
            clearInterval(timer);
            document.getElementById("bgc").style.backgroundColor="green";
        }
    });
};