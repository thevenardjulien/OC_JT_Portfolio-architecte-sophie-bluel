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

for (let work of works) {
  const workFigure = document.createElement("figure");
  workFigure.dataset.category = work.categoryId;

  const workImg = document.createElement("img");
  workImg.src = work.imageUrl;
  workImg.alt = work.title;

  const workFigCaption = document.createElement("figcaption");
  workFigCaption.textContent = work.title;

  workFigure.append(workImg);
  workFigure.append(workFigCaption);
  gallery.append(workFigure);
}
