document.body.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.background = `linear-gradient(${x}deg,rgb(157, 69, 212),rgb(239, 137, 166))`;
});

const darkModeToggle = document.querySelector('[data-js="darkmode-input"]');

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
