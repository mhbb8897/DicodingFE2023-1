const bodyMode = document.body;
const headerMode = document.querySelector("header");
const headerTag = document.querySelectorAll("a");
const buttonSign = document.querySelector(".article-text-brand a");
const profileBg = document.querySelectorAll(".profile, .about-cards");
const footerMode = document.querySelector("footer");

function updateStyles(element, styles) {
  Object.assign(element.style, styles);
}

function enableDarkMode() {
  updateStyles(bodyMode, { background: "#1d1919", color: "white" });
  updateStyles(headerMode, { background: "#26547C" });
  mode = document.querySelector(".logo a img").src = "assets/sun.png";
  headerTag.forEach((tag) => updateStyles(tag, { color: "white" }));
  updateStyles(buttonSign, { background: "#26547C" });
  profileBg.forEach((bg) => updateStyles(bg, { background: "#404E7C" }));
  updateStyles(footerMode, { background: "#26547C" });   
}

function disableDarkMode() {
  updateStyles(bodyMode, { background: "unset", color: "unset" });
  updateStyles(headerMode, { background: "#97db4f" });
  mode = document.querySelector(".logo a img").src = "assets/moon.png";
  headerTag.forEach((tag) => updateStyles(tag, { color: "black" }));
  updateStyles(buttonSign, { background: "#97db4f", color: "unset" });
  profileBg.forEach((bg) => updateStyles(bg, { background: "#dbd054" }));
  updateStyles(footerMode, { background: "#97db4f" });
}

function toggleDarkMode() {
  const darkModeStatus = localStorage.getItem("dark-mode");

  if (darkModeStatus === "enabled") {
    disableDarkMode();
    localStorage.setItem("dark-mode", "disabled");
  } else {
    enableDarkMode();
    localStorage.setItem("dark-mode", "enabled");
  }
}

document.getElementById("dark-mode-toggle").addEventListener("click", toggleDarkMode);

// Carousel
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(slideIndex) {
  currentSlide = (slideIndex + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
}

function changeSlide(delta) {
  showSlide(currentSlide + delta);
}

document.getElementById('nextBtn').addEventListener('click', () => changeSlide(1));
document.getElementById('prevBtn').addEventListener('click', () => changeSlide(-1));

showSlide(currentSlide);
