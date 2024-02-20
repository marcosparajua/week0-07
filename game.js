const buttonElement = document.getElementById("random-card-button");
buttonElement.addEventListener("click", () => {
  const cards = document.querySelectorAll(".card");
  const randomIndex = Math.trunc(Math.random() * cards.length);
  const randomCard = cards[randomIndex];

  output.textContent = `Your card is ${randomCard.textContent}`;
});
