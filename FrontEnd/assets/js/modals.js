import { fetchDeleteWork, fetchPostWork, fetchWorks } from "./fetch.js";

const works = await fetchWorks();

const editGallery = document.querySelector(".edit");

const modal = document.querySelector(".modal");
const modalExit = document.querySelector(".modal-exit");
const modalGallery = document.querySelector(".modal-img-container");

const modalAdd = document.querySelector(".modal-add");
const modalAddPrev = document.querySelector(".modal-add-prev");
const modalAddExit = document.querySelector(".modal-add-exit");

// Modal & ModalAdd display

if (window.location.pathname === "/FrontEnd/index.html") {
  editGallery.addEventListener("click", (e) => {
    modal.style.display = "block";
    e.stopPropagation();
    e.preventDefault();
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
}

// Import Modal Gallery Items

export function displayModalGalleryItems() {
  for (let work of works) {
    const modalItem = document.createElement("div");
    modalItem.dataset.id = work.id;

    const modalImg = document.createElement("img");
    modalImg.src = work.imageUrl;
    modalImg.alt = work.title;

    const modalEdit = document.createElement("a");
    modalEdit.textContent = "éditer";

    const modalTrash = document.createElement("i");
    modalTrash.classList.add("modal-trash", "fa-solid", "fa-trash-can");
    modalTrash.dataset.id = work.id;

    modalItem.append(modalImg);
    modalItem.append(modalEdit);
    modalItem.append(modalTrash);
    modalGallery.append(modalItem);
  }
}

// DELETE Work

export function deleteWork() {
  const modalTrashes = document.querySelectorAll(".modal-trash");
  for (let modalTrash of modalTrashes) {
    let dataId = modalTrash.dataset.id;
    modalTrash.addEventListener("click", (e) => {
      fetchDeleteWork(dataId);
    });
  }
}

// Add work button
// (Open ModalAdd)

const addWorkBtn = document.querySelector(".modal-add-del button");

export function addWorkButton() {
  addWorkBtn.addEventListener("click", () => {
    modalAdd.style.display = "block";
    modal.style.display = "none";
  });
}

// ADD WORK

export const formData = new FormData();
const imageInput = document.getElementById("file");
const title = document.getElementById("text");
const category = document.getElementById("select");

export function submitModalAddForm() {
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
}

// ModalAdd-Form

const modalAddForm = document.getElementById("modal-add-form");
const modalAddFile = document.getElementById("file");
const fileContainer = document.querySelector(".file-container");

// Edit placeholder with loaded image

export function editPlaceHolder() {
  modalAddFile.addEventListener("change", () => {
    const img = document.createElement("img");
    img.classList.add("active-img");
    img.src = URL.createObjectURL(modalAddFile.files[0]);
    fileContainer.innerHTML = defineImgSource(img.src);
    let fileContainerImg = document.querySelector(".file-container img");
    fileContainerImg.style.maxWidth = "100%";
    fileContainerImg.style.maxHeight = "220px";
    fileContainer.style.padding = "0";
  });
}

function defineImgSource(src) {
  return `<img src="${src}" alt="imageSource" />`;
}
