/*
// import { updateLogin } from "./js/login.js";
Problème d'import, à voir avec Atsé
*/

// NAV LogInOut display

const login = document.querySelector(".log a");
const storedToken = localStorage.token;

if (storedToken) {
  login.innerText = "logout";
} else {
  login.innerText = "login";
}

// NAV LogOut onclick

login.addEventListener("click", () => {
  if (storedToken) {
    localStorage.removeItem("token");
  }
});
