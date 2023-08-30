import { fetchWorks } from "./fetch.js";

const works = await fetchWorks();

// DIV Edit Gallery

const storedToken = localStorage.token;
let editGallery = document.querySelector(".edit");
let modal = document.querySelector(".modal");
let modalExit = document.querySelector(".modal-exit");

if (storedToken) {
  editGallery.style.display = "flex";
} else {
  editGallery.style.display = "none";
}

editGallery.addEventListener("click", (e) => {
  modal.style.display = "block";
  e.stopPropagation();
});

modalExit.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Import Modal Gallery Items

const modalGallery = document.querySelector(".modal-img-container");

for (let i = 0; i < works.length; i++) {
  const modalItem = document.createElement("div");
  modalItem.dataset.id = works[i].id;

  const modalImg = document.createElement("img");
  modalImg.src = works[i].imageUrl;
  modalImg.alt = works[i].title;

  const modalEdit = document.createElement("a");
  modalEdit.textContent = "Éditer";

  const modalTrash = document.createElement("i");
  modalTrash.classList.add("modal-trash", "fa-solid", "fa-trash-can");

  modalItem.prepend(modalTrash);
  modalItem.prepend(modalEdit);
  modalItem.prepend(modalImg);
  modalGallery.prepend(modalItem);
}

// DELETE Modal Gallery Item

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

// Active filter (WIP)

// Import Gallery Items

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
