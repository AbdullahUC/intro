const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".review-card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let cardsPerView = getCardsPerView();

function getCardsPerView() {
  return window.innerWidth <= 768 ? 1 : 2;
}

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (index < cards.length - cardsPerView) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
  } else {
    index = cards.length - cardsPerView;
  }
  updateCarousel();
});

/* Auto slide */
setInterval(() => {
  nextBtn.click();
}, 4000);

/* Handle resize */
window.addEventListener("resize", () => {
  cardsPerView = getCardsPerView();
  updateCarousel();
});
