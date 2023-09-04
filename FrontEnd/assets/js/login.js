import { storedToken } from "./config.js";
import { fetchLogin } from "./fetch.js";

export const login = document.querySelector(".log a");
export const sectionLogin = document.querySelector(".login");
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const submitInput = document.querySelector('input[type="submit"]');
const loginForm = document.querySelector(".login form");

// Login Form
let email;
let password;

if (loginForm) {
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
