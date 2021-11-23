const btnLight = document.querySelector(".btn-light");
const btnDark = document.querySelector(".btn-dark");
const container = document.querySelector(".container");
const body = document.querySelector("body");

btnLight.addEventListener("click", () => {
  container.style.backgroundColor = "#fff";
  body.style.backgroundColor = "#000";
});

btnDark.addEventListener("click", () => {
  container.style.backgroundColor = "#000";
  body.style.backgroundColor = "#fff";
});
