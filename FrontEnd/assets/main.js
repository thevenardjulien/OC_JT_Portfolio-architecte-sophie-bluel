import { fetchLogin, fetchWorks } from "./js/fetch.js";

const works = await fetchWorks();
console.log(works);

// Gallery Items

const gallery = document.querySelector(".gallery");

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

// Filters button

let filterBtnAll = document.querySelector(".all");
let filterBtnObjects = document.querySelector(".objects");
let filterBtnapApartments = document.querySelector(".apartments");
let filterBtnHotel = document.querySelector(".hotel");

function hideAllCategories() {
  const selectFigures = document.querySelectorAll(".gallery > figure");
  selectFigures.forEach((figure) => {
    figure.style.display = "none";
  });
}

function showAllCategories() {
  const selectFigures = document.querySelectorAll(".gallery > figure");
  selectFigures.forEach((figure) => {
    figure.style.display = "block";
  });
}

filterBtnAll.addEventListener("click", () => {
  showAllCategories();
});

filterBtnObjects.addEventListener("click", () => {
  hideAllCategories();
  const selectFigures = document.querySelectorAll(
    ".gallery > figure[data-category='1']"
  );
  selectFigures.forEach((figure) => {
    figure.style.display = "block";
  });
});

filterBtnapApartments.addEventListener("click", () => {
  hideAllCategories();
  const selectFigures = document.querySelectorAll(
    ".gallery > figure[data-category='2']"
  );
  selectFigures.forEach((figure) => {
    figure.style.display = "block";
  });
});

filterBtnHotel.addEventListener("click", () => {
  hideAllCategories();
  const selectFigures = document.querySelectorAll(
    ".gallery > figure[data-category='3']"
  );
  selectFigures.forEach((figure) => {
    figure.style.display = "block";
  });
});
