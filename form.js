const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let questionText = document.querySelector('[data-js="question"]').value;
  let answerText = document.querySelector('[data-js="answer"]').value;
  let tagText = document.querySelector('[data-js="tag"]').value;

  if (questionText && answerText && tagText) {
    let newCard = document.createElement("li");
    newCard.classList.add("card-list__item");
    newCard.innerHTML = `<article class="card" data-js="card">
          <h2 class="card__question">${questionText}</h2>
          <button class="card__button-answer" type="button" data-js="answer-button">
            Show answer
          </button>
          <p class="card__answer card__answer--active" data-js="answer-display">
            ${answerText}
          </p>
          <ul class="card__tag-list">
            <li class="card__tag-list-item" role="button" tabindex="0">
              ${tagText}
            </li>
          </ul>
          <div class="card__button-bookmark">
            <button class="bookmark" aria-label="bookmark" type="button">
              <svg class="bookmark__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </button>
          </div>
        </article>
      `;
    form.appendChild(newCard);
  }
});
