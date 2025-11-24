const items = document.querySelectorAll('.js-scroll-item');
const options = {
  threshold: 0.3
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, options);
items.forEach(item => observer.observe(item));