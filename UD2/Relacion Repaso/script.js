document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  body.classList.add("js-enabled");

  prepararBloqueDesplegable();
  prepararScrollReveal();
  prepararGaleriaEscalonada();
});

window.addEventListener("load", () => {
  document.body.classList.add("is-ready");
});

function prepararBloqueDesplegable() {
  const bloque = document.querySelector(".bloque-desplegable");
  if (!bloque) return;

  const toggle = bloque.querySelector(".bloque-desplegable__toggle");
  if (!toggle) return;

  bloque.classList.add("is-open");

  toggle.addEventListener("click", () => {
    bloque.classList.toggle("is-open");
  });
}

function prepararScrollReveal() {
  const items = document.querySelectorAll(".js-scroll-item");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  items.forEach((item, index) => {
    if (!item.style.getPropertyValue("--scroll-delay")) {
      const delay = Math.min(index * 0.08, 0.4);
      item.style.setProperty("--scroll-delay", `${delay}s`);
    }
    observer.observe(item);
  });
}

function prepararGaleriaEscalonada() {
  const cards = document.querySelectorAll(".cards-grid .card-expo");
  cards.forEach((card, index) => {
    card.style.setProperty("--scroll-delay", `${index * 0.15}s`);
  });
}

