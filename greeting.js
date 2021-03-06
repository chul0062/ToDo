const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting"),
    toDoFormShow = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";
    
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove("showing");
    greeting.classList.add("showing");
    toDoFormShow.classList.add(SHOWING_CN);
    greeting.innerText = `어서오세요 ${text}님`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
        }
    }

function init() {
    loadName();
}

init();