const backToTopButton = document.querySelector(".back-to-top");

const backToTop = () => {
  if (window.scrollY >= 200) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

window.addEventListener("scroll", function () {
  backToTop();
});
