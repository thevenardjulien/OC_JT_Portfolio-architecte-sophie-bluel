import { filterActiveBtn } from "./js/functions/filtersFuncs.js";
import { gallery } from "./js/gallery.js";
import {
  displayEditGallery,
  displayGalleryItems,
} from "./js/functions/galleryFuncs.js";
import { sectionLogin } from "./js/login.js";
import { displayLogInOut } from "./js/functions/loginFuncs.js";
import {
  addWorkButton,
  displayModalGalleryItems,
  editPlaceHolder,
  submitModalAddForm,
} from "./js/functions/modalsFuncs.js";

// ALL
displayLogInOut();

// Gallery
if (gallery) {
  displayEditGallery();
  displayGalleryItems();
  filterActiveBtn();
  displayModalGalleryItems();
  addWorkButton();
  editPlaceHolder();
  submitModalAddForm();
}

// Login
if (sectionLogin) {
  import("./js/login.js");
}
