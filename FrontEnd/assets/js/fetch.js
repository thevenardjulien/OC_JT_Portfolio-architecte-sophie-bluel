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
