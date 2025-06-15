// assets/js/preloader.js

window.addEventListener('load', () => {
  // Hide the preloader overlay
  const preloader = document.getElementById('js-preloader-card');
  if (preloader) {
    preloader.style.display = 'none';
  }
  // Re-enable scrolling by removing the overflow-hidden class
  document.documentElement.classList.remove('overflow-hidden');
});