// Filters button

const filterBtnAll = document.querySelector(".all");
const filterBtnObjects = document.querySelector(".objects");
const filterBtnapApartments = document.querySelector(".apartments");
const filterBtnHotel = document.querySelector(".hotel");

function hideAllCategories() {
  const selectFigures = document.querySelectorAll(".gallery > figure");
  selectFigures.forEach((figure) => {
    figure.style.display = "none";
  });
}

function showAllCategories() {
  const selectFigures = document.querySelectorAll(".gallery > figure");
  selectFigures.forEach((figure) => {
    figure.style.display = "block";
  });
}

filterBtnAll.addEventListener("click", () => {
  showAllCategories();
});

filterBtnObjects.addEventListener("click", () => {
  hideAllCategories();
  const selectFiguresCat1 = document.querySelectorAll(
    ".gallery > figure[data-category='1']"
  );
  selectFiguresCat1.forEach((figure) => {
    figure.style.display = "block";
  });
});

filterBtnapApartments.addEventListener("click", () => {
  hideAllCategories();
  const selectFiguresCat2 = document.querySelectorAll(
    ".gallery > figure[data-category='2']"
  );
  selectFiguresCat2.forEach((figure) => {
    figure.style.display = "block";
  });
});

filterBtnHotel.addEventListener("click", () => {
  hideAllCategories();
  const selectFiguresCat3 = document.querySelectorAll(
    ".gallery > figure[data-category='3']"
  );
  selectFiguresCat3.forEach((figure) => {
    figure.style.display = "block";
  });
});

// Filters Button Active

const filterBtns = document.querySelectorAll(".filter");

filterBtnAll.classList.add("active");
filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    filterBtn.classList.add("active");
  });
});
