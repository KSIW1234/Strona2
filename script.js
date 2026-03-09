const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector(".lightbox-caption");
const closeButton = lightbox?.querySelector(".lightbox-close");

document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (!lightbox || !lightboxImage || !lightboxCaption) {
      return;
    }

    lightboxImage.src = card.dataset.image || "";
    lightboxImage.alt = card.querySelector("img")?.alt || "";
    lightboxCaption.textContent = card.dataset.caption || "";
    lightbox.showModal();
  });
});

closeButton?.addEventListener("click", () => {
  lightbox?.close();
});

lightbox?.addEventListener("click", (event) => {
  const bounds = lightbox.getBoundingClientRect();
  const insideDialog =
    event.clientX >= bounds.left &&
    event.clientX <= bounds.right &&
    event.clientY >= bounds.top &&
    event.clientY <= bounds.bottom;

  if (!insideDialog) {
    lightbox.close();
  }
});

document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.alert("Dziękujemy. Skontaktujemy się możliwie szybko.");
});
