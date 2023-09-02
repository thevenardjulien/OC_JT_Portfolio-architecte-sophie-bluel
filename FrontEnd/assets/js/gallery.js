import { storedToken } from "./config.js";
import { fetchWorks } from "./fetch.js";

const works = await fetchWorks();
const gallery = document.querySelector(".gallery");
const editGallery = document.querySelector(".edit");

export function displayGalleryItems() {
  if (gallery) {
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
  }
}

export function displayEditGallery() {
  if (gallery) {
    if (storedToken) {
      editGallery.style.display = "flex";
    } else {
      editGallery.style.display = "none";
    }
  }
}
