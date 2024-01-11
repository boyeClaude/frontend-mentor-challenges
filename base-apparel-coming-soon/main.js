const email = document.getElementById("email");
const button = document.querySelector(".btn-submit");
const warningMessage = document.querySelector(".waring-message");
const successMessage = document.querySelector(".success-message");

// email validator function
function ValidateEmail(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    warningMessage.style.display = "none";
    successMessage.style.display = "block";
  } else {
    warningMessage.style.display = "block";
    email.style.border = "2px solid red";
    successMessage.style.display = "none";
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  ValidateEmail(email);
});
