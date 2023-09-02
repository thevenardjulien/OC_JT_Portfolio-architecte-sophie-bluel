import { filterActiveBtn } from "./js/filters.js";
import { displayEditGallery, displayGalleryItems } from "./js/gallery.js";
import { displayLogInOut } from "./js/login.js";
import {
  addWorkButton,
  deleteWork,
  displayModalGalleryItems,
  editPlaceHolder,
  submitModalAddForm,
} from "./js/modals.js";

displayLogInOut();

// INDEX.HTML
if (window.location.pathname === "/FrontEnd/index.html") {
  displayEditGallery();
  displayGalleryItems();
  filterActiveBtn();
  displayModalGalleryItems();
  addWorkButton();
  editPlaceHolder();
  submitModalAddForm();
  deleteWork();
}

// LOGIN.HTML
if (window.location.pathname === "/FrontEnd/login.html") {
  import("./js/login.js");
}
