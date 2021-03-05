const clockContainer = document.querySelector(".js-clock")
    , clockTitle = clockContainer.querySelector("h1"),
    clockDay = clockContainer.querySelector("h6");

function getWeek(week){
    const weeks = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return weeks[week];
}

function getDay(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const days = today.getDay();
    const day = getWeek(days);
    
    clockDay.innerHTML = `${year}.${month}.${date} ${day}`;
}

function getTime() {
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    const sec = date.getSeconds();
    clockTitle.innerText =
        `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
    getTime();
    getDay();
    setInterval(getTime, 1000);
}

init();