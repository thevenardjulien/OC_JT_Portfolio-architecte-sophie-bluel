import { storedToken } from "./config.js";
import { fetchLogin } from "./fetch.js";

const login = document.querySelector(".log a");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const submitInput = document.querySelector('input[type="submit"]');

export function displayLogInOut() {
  if (storedToken) {
    login.innerText = "logout";
  } else {
    login.innerText = "login";
  }
}

// Login Form
let email;
let password;

if (window.location.pathname === "/FrontEnd/login.html") {
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
}

// Remove token on logout
login.addEventListener("click", () => {
  if (storedToken) {
    localStorage.removeItem("token");
  }
});
