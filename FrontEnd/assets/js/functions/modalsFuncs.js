import { fetchDeleteWork, fetchPostWork, fetchWorks } from "../fetch.js";
import { gallery } from "../gallery.js";
import { modalGallery, modalAdd, modal } from "../modals.js";
import { formData } from "../modals.js";
import { displayGalleryItems } from "./galleryFuncs.js";

const imageInput = document.getElementById("file");
const title = document.getElementById("text");
const category = document.getElementById("select");

const modalAddForm = document.getElementById("modal-add-form");
const modalAddFile = document.getElementById("file");
const fileContainer = document.querySelector(".file-container");

export async function displayModalGalleryItems() {
  if (modalGallery) {
    let works = await fetchWorks();
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
  deleteWork();
}

export async function deleteWork() {
  let modalTrashes = document.querySelectorAll(".modal-trash");
  for (let modalTrash of modalTrashes) {
    let dataId = modalTrash.dataset.id;
    modalTrash.addEventListener("click", async () => {
      if (confirm("Êtes-vous sur de vouloir supprimer cet élément ?")) {
        fetchDeleteWork(dataId);
        let divDelete = document.querySelector(`div[data-id="${dataId}"]`);
        divDelete.remove();
        gallery.innerHTML = "";
        displayGalleryItems();
      }
    });
  }
}

export function addWorkButton() {
  const addWorkBtn = document.querySelector(".modal-add-del button");
  if (addWorkBtn) {
    addWorkBtn.addEventListener("click", () => {
      modalAdd.style.display = "block";
      modal.style.display = "none";
    });
  }
}

export function submitModalAddForm() {
  if (modalAddForm) {
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

      setTimeout(() => {
        modalAdd.style.display = "none";
        modal.style.display = "block";
        gallery.innerHTML = "";
        displayGalleryItems();
        modalGallery.innerHTML = "";
        displayModalGalleryItems();
      }, 1500);
    });
  }
}

export function editPlaceHolder() {
  if (modalAddFile) {
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
}

function defineImgSource(src) {
  return `<img src="${src}" alt="imageSource" />`;
}
