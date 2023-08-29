// WORKS

export async function fetchWorks() {
  try {
    const r = await fetch("http://localhost:5678/api/works", {
      Accept: "application/json",
    });
    if (r.ok) {
      return r.json();
    }
  } catch (err) {
    console.error("Impossible de récupérer les données auprès de l'API " + err);
  }
}

// LOGIN

export async function fetchLogin(email, password) {
  try {
    const r = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{
        "email": "${email}",
        "password": "${password}"
      }`,
    });

    const responseLogin = await r.json();

    if (r.ok) {
      const token = responseLogin.token;
      localStorage.setItem("token", token);
      window.location.href = "./index.html";
      return token;
    } else if (r.status === 401) {
      loginIncorrect();
    } else if (r.status === 404) {
      loginNotFound();
    }
  } catch (err) {
    console.error("Erreur survenue lors de la connexion." + err);
  }
}

function loginIncorrect() {
  const formAlert = document.querySelector(".form-alert");
  formAlert.textContent = "Email ou mot de passe incorrect.";
}
function loginNotFound() {
  const formAlert = document.querySelector(".form-alert");
  formAlert.textContent = "Impossible de trouver cet utilisateur.";
}
