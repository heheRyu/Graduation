const clock=document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock,1000);


function displayDate(){
    const dateElement = document.getElementById("date");
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${month}월 ${day}일`;

    dateElement.innerText = formattedDate;
}

window.onload = displayDate;

