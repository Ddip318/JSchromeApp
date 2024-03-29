function saveAndRemoveLoginForm(event) {
  event.preventDefault();

  const inputUsername = document.getElementById("username");
  const inputPassword = document.getElementById("password");
  const username = inputUsername.value;
  const password = inputPassword.value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  const loginForm = document.getElementById("loginForm");
  loginForm.remove();

  const welcomeUser = document.getElementById("welcomeUser");
  welcomeUser.innerText = `Welcome ${username}`;
  const welcome = document.getElementById("welcome");
  welcome.style.display = "block";
  const weather = document.getElementById("weather");
  weather.style.display = "block";
  const secondBox = document.getElementById("secondBox");
  secondBox.style.display = "block";
  const inputAndToDo = document.querySelector(".inputAndtoDo");
  inputAndToDo.style.display = "flex";

  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", saveAndRemoveLoginForm);
