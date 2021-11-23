const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navigationELement = document.getElementsByClassName(
  "navigation-element"
)[0];
console.log(navigationELement);

toggleButton.addEventListener("click", () => {
  navigationELement.classList.toggle("active");
});
