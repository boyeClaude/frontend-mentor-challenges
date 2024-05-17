const heroEmail = document.querySelector("#hero--email");
const emailAccess = document.querySelector("#email-access");

const btnHeroForm = document.querySelector("#btn-hero-form");
const btnEarlyAccess = document.querySelector("#btn-early-access");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

btnHeroForm.addEventListener("click", (e) => {
  e.preventDefault();
  const checkingEmail = validateEmail(heroEmail.value);

  if (checkingEmail) {
    heroEmail.style.border = "1px solid green";
  } else {
    heroEmail.style.border = "1px solid red";
  }
});

btnEarlyAccess.addEventListener("click", (e) => {
  e.preventDefault();
  const checkingEmail = validateEmail(emailAccess.value);

  if (checkingEmail) {
    emailAccess.style.border = "1px solid green";
  } else {
    emailAccess.style.border = "1px solid red";
  }
});
