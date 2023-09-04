const editGallery = document.querySelector(".edit");
export const modal = document.querySelector(".modal");
const modalExit = document.querySelector(".modal-exit");
export const modalGallery = document.querySelector(".modal-img-container");
export const modalAdd = document.querySelector(".modal-add");
const modalAddPrev = document.querySelector(".modal-add-prev");
const modalAddExit = document.querySelector(".modal-add-exit");

// Modal & ModalAdd display

if (editGallery) {
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

export const formData = new FormData();
