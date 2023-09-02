const divFilters = document.querySelector(".filters");
const filterBtnAll = document.querySelector(".all");
const filterBtnObjects = document.querySelector(".objects");
const filterBtnapApartments = document.querySelector(".apartments");
const filterBtnHotel = document.querySelector(".hotel");

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
function displayFigures(boolean) {
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
function displayCategory(category) {
  const selectCategory = document.querySelectorAll(
    `.gallery > figure[data-category='${category}']`
  );
  for (let category of selectCategory) {
    category.style.display = "block";
  }
}

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
