const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    pages.forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});

// Neon pulse animation for Home text
window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-content");
  hero.classList.add("pulse");
});
