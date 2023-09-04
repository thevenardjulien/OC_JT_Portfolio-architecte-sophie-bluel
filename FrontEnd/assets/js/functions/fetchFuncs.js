export function loginIncorrect() {
  const formAlert = document.querySelector(".form-alert");
  formAlert.textContent = "Email ou mot de passe incorrect.";
}

export function loginNotFound() {
  const formAlert = document.querySelector(".form-alert");
  formAlert.textContent = "Impossible de trouver cet utilisateur.";
}
