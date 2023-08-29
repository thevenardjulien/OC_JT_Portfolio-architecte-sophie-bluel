// Login

import { fetchLogin } from "./fetch.js";

let emailInput = document.querySelector('input[type="email"]');
let passwordInput = document.querySelector('input[type="password"]');
let submitInput = document.querySelector('input[type="submit"]');

let email;
let password;

emailInput.addEventListener("input", (e) => {
  email = e.target.value;
});

passwordInput.addEventListener("input", (e) => {
  password = e.target.value;
});

submitInput.addEventListener("click", (e) => {
  e.preventDefault();
  fetchLogin(email, password);
});

/* 
// Update UL Login
// export function updateLogin() {
//   const login = document.querySelector(".log a");
//   const storedToken = localStorage.token;
//   if (storedToken) {
//     login.innerText = "logout";
//   } else {
//     login.innerText = "login";
//   }
// }
Problème d'import, à voir avec Atsé
*/
