import { divFilters, filterBtnAll } from "../filters.js";

export function filterActiveBtn() {
  if (divFilters) {
    const filterBtns = document.querySelectorAll(".filter");
    filterBtnAll.classList.add("active");
    filterBtns.forEach((filterBtn) => {
      filterBtn.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        filterBtn.classList.add("active");
      });
    });
  }
}

/** @param {boolean} boolean  */
export function displayFigures(boolean) {
  const selectAllFigures = document.querySelectorAll(".gallery > figure");
  for (let figure of selectAllFigures) {
    if (boolean === true) {
      figure.style.display = "block";
    } else {
      figure.style.display = "none";
    }
  }
}

/** @param {number} category
 * 1 = objects
 * 2 = apartments
 * 3 = hotels & restaurants
 */
export function displayCategory(category) {
  const selectCategory = document.querySelectorAll(
    `.gallery > figure[data-category='${category}']`
  );
  for (let category of selectCategory) {
    category.style.display = "block";
  }
}
