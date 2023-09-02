import { localhost, storedToken } from "./config.js";
import { formData } from "./modals.js";

// GET WORKS

export async function fetchWorks() {
  try {
    const r = await fetch(`${localhost}/api/works`, {
      Accept: "application/json",
    });
    if (r.ok) {
      return r.json();
    }
  } catch (err) {
    console.error("Impossible de récupérer les données auprès de l'API " + err);
  }
}

// POST LOGIN

export async function fetchLogin(email, password) {
  try {
    const r = await fetch(`${localhost}/api/users/login`, {
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

// DELETE WORK

export async function fetchDeleteWork(id) {
  try {
    const r = await fetch(`${localhost}/api/works/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${storedToken}`,
      },
    });
    if (r.ok) {
      console.log(`L'élément ${id} a bien été supprimé`);
    }
  } catch (err) {
    console.error("Erreur : " + err);
  }
}

// POST WORK

export async function fetchPostWork() {
  try {
    const r = await fetch(`${localhost}/api/works`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${storedToken}`,
        Accept: "Application/json",
      },
      body: formData,
    });
    if (r.ok) {
      return console.log(r.json());
    } else if (r.status === 401) {
      for (let data of formData) {
        console.log(data);
      }
    }
  } catch (e) {
    console.log("Erreur :" + e);
  }
}
