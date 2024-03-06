const wrapperSocialSection = document.querySelector(".wrapper__socials");
const iconShareButton = document.querySelector(".icon-share");

iconShareButton.addEventListener("click", () => {
  wrapperSocialSection.classList.toggle("hidden");
});
