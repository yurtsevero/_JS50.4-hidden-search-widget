const searchButton = document.querySelector(".search__button");
const searchText = document.querySelector(".search__text");
searchButton.addEventListener("click", () => {
  searchButton.classList.toggle("search__button--show");
  searchText.classList.toggle("search__text--show");
  searchText.focus();
});
