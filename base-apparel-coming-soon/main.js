const email = document.getElementById("email");
const button = document.querySelector(".btn-submit");
const warningMessage = document.querySelector(".waring-message");

button.addEventListener("click", (e) => {
  e.preventDefault();
  warningMessage.style.display = "block";
  console.log("button was clicked");
});
