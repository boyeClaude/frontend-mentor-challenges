const containerAccordion = document.getElementsByClassName("container");

for (i = 0; i < containerAccordion.length; i++) {
  containerAccordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
