import { storedToken } from "../config.js";
import { fetchWorks } from "../fetch.js";
import { gallery, editGallery } from "../gallery.js";

export async function displayGalleryItems() {
  if (gallery) {
    let works = await fetchWorks();
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
