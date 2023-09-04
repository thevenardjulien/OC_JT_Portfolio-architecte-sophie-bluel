import { storedToken } from "../config.js";
import { login } from "../login.js";

export function displayLogInOut() {
  if (storedToken) {
    login.innerText = "logout";
  } else {
    login.innerText = "login";
  }
}
