import { fetchWorks } from "./js/fetch.js";

const works = await fetchWorks();


// Gallery Items

const gallery = document.querySelector(".gallery");

for (let i = 0; i < works.length; i++) {
  const workFigure = document.createElement("figure");
  workFigure.dataset.id = [i];

  const workImg = document.createElement("img");
  workImg.src = works[i].imageUrl;
  workImg.alt = works[i].title;

  const workFigCaption = document.createElement("figcaption");
  workFigCaption.textContent = works[i].title;

  workFigure.append(workImg);
  workFigure.append(workFigCaption);
  gallery.append(workFigure);
}
