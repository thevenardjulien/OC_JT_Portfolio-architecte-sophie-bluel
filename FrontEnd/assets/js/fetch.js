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

export async function fetchLogin(data) {
  try {
    const r = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return r.json();
  } catch (err) {
    console.error("Impossible d'envoyer les données à l'API " + err);
  }
}
