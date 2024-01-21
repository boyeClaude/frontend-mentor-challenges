const firstCard = document.getElementById("first_card");
const thanksCard = document.getElementById("thank_you_card");
const selectedRate = document.getElementById("selectedRate");

const btnRates = document.querySelectorAll("#btn");
const btnSubmit = document.getElementById("btn-submit");
const btnRating = document.getElementById("btn-rating");

// toggle btn submit and btn rate
btnSubmit.addEventListener("click", () => {
  firstCard.classList.add("hidden");
  thanksCard.classList.remove("hidden");
});

btnRates.forEach((rate) => {
  rate.addEventListener("click", () => {
    selectedRate.innerHTML = rate.innerHTML;
  });
});

// toggle btn submit and btn rate
btnRating.addEventListener("click", () => {
  firstCard.classList.remove("hidden");
  thanksCard.classList.add("hidden");
});
