let count=0;
function update()
{
    document.getElementById("counter").innerHTML=count;
    if(count>0)
    {
        document.getElementById("counter").style.color="green";
    }
    else if(count<0)
    {
        document.getElementById("counter").style.color="red";
    }
    else
    {
        document.getElementById("counter").style.color="black";
    }
}
function dec_()
{
    count--;
    document.getElementById("dec_").style.backgroundColor="red";
    document.getElementById("reset_").style.backgroundColor="white";
    document.getElementById("inc_").style.backgroundColor="white";
    update();
}
function reset_()
{
    count=0; 
    document.getElementById("reset_").style.backgroundColor="cadetblue";
    document.getElementById("inc_").style.backgroundColor="white";
    document.getElementById("dec_").style.backgroundColor="white";
    update();
}
function inc_()
{
    count++;
    document.getElementById("inc_").style.backgroundColor="lightgreen";
    document.getElementById("reset_").style.backgroundColor="white";
    document.getElementById("dec_").style.backgroundColor="white";
    update();
}