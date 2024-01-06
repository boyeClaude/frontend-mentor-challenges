/* container */
const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thanks-container");

// button
const submitButton = document.getElementById("submit");
const rateAgainButton = document.getElementById("rate-again");

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn-rating");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

rateAgainButton.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});
