const ratingElement = document.querySelector("[data-js-rating]");
const thankYouElement = document.querySelector("[data-js-thank-you]");
const buttonElements = document.querySelectorAll("[data-js-button-check]");
const buttonSubmitElement = document.querySelector("[data-js-button-submit]");
const resultElement = document.querySelector("[data-js-result]");

let selectedRating = null;

const onButtonClick = (e) => {
  buttonElements.forEach(button => {
    button.setAttribute("aria-selected", "false");
  })

  e.target.setAttribute("aria-selected", "true");
  selectedRating = e.target.textContent.trim();
}

const onClickSubmitButton = () => {
  if (!selectedRating) return;

  ratingElement.classList.add("is-hidden");
  resultElement.textContent = selectedRating;
  thankYouElement.classList.add("is-visible");
}

buttonElements.forEach(button => {
  button.addEventListener("click", (e) => onButtonClick(e));
})

buttonSubmitElement.addEventListener("click", onClickSubmitButton)