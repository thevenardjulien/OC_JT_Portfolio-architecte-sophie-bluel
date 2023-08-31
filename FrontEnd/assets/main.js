/*
// import { updateLogin } from "./js/login.js";
Problème d'import, à voir avec Atsé
*/

// NAV LogInOut display

const storedToken = localStorage.token;
const login = document.querySelector(".log a");

if (storedToken) {
  login.innerText = "logout";
} else {
  login.innerText = "login";
}

// NAV LogOut onclick
// Remove Token

login.addEventListener("click", () => {
  if (storedToken) {
    localStorage.removeItem("token");
  }
});
