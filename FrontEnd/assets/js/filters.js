import { displayCategory, displayFigures } from "./functions/filtersFuncs.js";

export const divFilters = document.querySelector(".filters");
export const filterBtnAll = document.querySelector(".all");
const filterBtnObjects = document.querySelector(".objects");
const filterBtnapApartments = document.querySelector(".apartments");
const filterBtnHotel = document.querySelector(".hotel");

// FILTERS EVENTS

filterBtnAll?.addEventListener("click", () => {
  displayFigures(true);
});

filterBtnObjects?.addEventListener("click", () => {
  displayFigures(false);
  displayCategory(1);
});

filterBtnapApartments?.addEventListener("click", () => {
  displayFigures(false);
  displayCategory(2);
});

filterBtnHotel?.addEventListener("click", () => {
  displayFigures(false);
  displayCategory(3);
});
