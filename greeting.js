const form = document.querySelector(".js-form"),
  input = document.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  resetUser = document.querySelector(".js-resetUser"),
  user = document.querySelector(".js-user");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function deleteUser() {
  localStorage.removeItem(USER_LS);
  form.classList.add(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  resetUser.classList.remove(SHOWING_CN);
  user.value = "";
}

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
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  resetUser.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
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
  resetUser.addEventListener("click", deleteUser);
}

init();
