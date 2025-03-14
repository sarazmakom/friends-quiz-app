document.body.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  document.body.style.background = `linear-gradient(${x}deg,rgb(157, 69, 212),rgb(239, 137, 166))`;
});

const cards = document.querySelectorAll("[data-js='card']");

cards.forEach((card) => {
  const answerButton = card.querySelector("[data-js='answer-button']");
  const answerDisplay = card.querySelector("[data-js='answer-display']");

  answerButton.addEventListener("click", () => {
    const isAnswerVisible = answerDisplay.classList.contains(
      "card__answer--active"
    );

    if (isAnswerVisible) {
      answerButton.textContent = "Show answer";
    } else {
      answerButton.textContent = "Hide answer";
    }
    answerDisplay.classList.toggle("card__answer--active");
  });
});

const darkModeToggle = document.querySelector('[data-js="darkmode-input"]');

darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
