import { fetchPostWork, fetchWorks } from "./fetch.js";

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

for (let work of works) {
  const modalItem = document.createElement("div");
  modalItem.dataset.id = work.id;

  const modalImg = document.createElement("img");
  modalImg.src = work.imageUrl;
  modalImg.alt = work.title;

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
// Open ModalAdd

const addWorkBtn = document.querySelector(".modal-add-del button");

addWorkBtn.addEventListener("click", () => {
  modalAdd.style.display = "block";
  modal.style.display = "none";
});

// ModalAdd-Form

const modalAddForm = document.getElementById("modal-add-form");
const modalAddFile = document.getElementById("file");
const placeholder = document.querySelector(".file-container-placeholder");
const placeholderImg = document.querySelector(".file-container-placeholder i");

// Edit placeholder with loaded image

modalAddFile.addEventListener("change", () => {
  const img = document.createElement("img");
  img.classList.add("active-img");
  img.src = URL.createObjectURL(modalAddFile.files[0]);
  placeholderImg.style.display = "none";
  placeholder.append(img);
});

export const formData = new FormData();
const imageInput = document.getElementById("file");
const title = document.getElementById("text");
const category = document.getElementById("select");

// const imageElement = document.querySelector("#file");
// console.dir(imageElement);

modalAddForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const image = imageInput.files[0];

  formData.append("image", image);
  formData.append("title", title.value);
  formData.append("category", category.value);

  fetchPostWork();

  modalAddForm.reset();
  const resultDiv = document.createElement("div");
  resultDiv.textContent = `Formulaire soumis.`;
  modalAddForm.append(resultDiv);
  placeholder.innerHTML = `<i class="fa-regular fa-image"></i>`;
});
