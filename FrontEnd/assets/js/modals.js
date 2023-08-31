import { fetchWorks } from "./fetch.js";

const works = await fetchWorks();

const editGallery = document.querySelector(".edit");

const modal = document.querySelector(".modal");
const modalExit = document.querySelector(".modal-exit");
const modalGallery = document.querySelector(".modal-img-container");

const modalAdd = document.querySelector(".modal-add");
const modalAddPrev = document.querySelector(".modal-add-prev");
const modalAddExit = document.querySelector(".modal-add-exit");

// Modal & ModalAdd display

editGallery.addEventListener("click", (e) => {
  modal.style.display = "block";
  e.stopPropagation();
});

document.addEventListener("click", () => {
  modal.style.display = "none";
  modalAdd.style.display = "none";
});

modal.addEventListener("click", (e) => {
  e.stopPropagation();
});

modalAdd.addEventListener("click", (e) => {
  e.stopPropagation();
});

modalExit.addEventListener("click", () => {
  modal.style.display = "none";
});

modalAddExit.addEventListener("click", () => {
  modalAdd.style.display = "none";
});

modalAddPrev.addEventListener("click", () => {
  modalAdd.style.display = "none";
  modal.style.display = "block";
});

// Import Modal Gallery Items

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

  modalItem.append(modalImg);
  modalItem.append(modalEdit);
  modalItem.append(modalTrash);
  modalGallery.append(modalItem);
}

// Add work

const addWorkBtn = document.querySelector(".modal-add-del button");

addWorkBtn.addEventListener("click", () => {
  modalAdd.style.display = "block";
  modal.style.display = "none";
});

// Remove work
