import { filterActiveBtn } from "./js/filters.js";
import { displayEditGallery, displayGalleryItems } from "./js/gallery.js";
import { displayLogInOut } from "./js/login.js";

displayLogInOut();

// INDEX.HTML
if (window.location.pathname === "/FrontEnd/index.html") {
  displayEditGallery();
  displayGalleryItems();
  filterActiveBtn();
  import("./js/modals.js");
}

// LOGIN.HTML
if (window.location.pathname === "/FrontEnd/login.html") {
  import("./js/login.js");
}
