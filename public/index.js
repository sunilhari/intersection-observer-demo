/**
 * Intersection Observer Demo
 */
const getImage = url =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
const applyImage = image => {
  const src = image.dataset.src;
  getImage(src).then(() => {
    image.src = src;
  });
};
// Threshold varies from 0-1.Determines how soon image to be loaded
const options = {
  rootMargin: "0px",
  threshold: 1,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      applyImage(entry.target);
    }
  });
}, options);

const images = document.querySelectorAll(".load-lazy");
images.forEach(image => observer.observe(image));
