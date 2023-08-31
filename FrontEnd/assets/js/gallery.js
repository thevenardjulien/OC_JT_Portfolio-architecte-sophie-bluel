import { fetchWorks } from "./fetch.js";

const works = await fetchWorks();
const storedToken = localStorage.token;
const editGallery = document.querySelector(".edit");
const gallery = document.querySelector(".gallery");

// DIV Edit Gallery
// Visible if token is stored

if (storedToken) {
  editGallery.style.display = "flex";
} else {
  editGallery.style.display = "none";
}

// Import Gallery Items

for (let i = 0; i < works.length; i++) {
  const workFigure = document.createElement("figure");
  workFigure.dataset.category = works[i].categoryId;

  const workImg = document.createElement("img");
  workImg.src = works[i].imageUrl;
  workImg.alt = works[i].title;

  const workFigCaption = document.createElement("figcaption");
  workFigCaption.textContent = works[i].title;

  workFigure.append(workImg);
  workFigure.append(workFigCaption);
  gallery.append(workFigure);
}
