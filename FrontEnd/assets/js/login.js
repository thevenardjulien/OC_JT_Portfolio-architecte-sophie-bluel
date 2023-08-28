// Login

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
  console.log(email);
  console.log(password);
});
