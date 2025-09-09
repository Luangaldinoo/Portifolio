function toggleMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('active');
        }
        function smoothScroll(target, duration) {
  let targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Função de easing (suavização)
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      smoothScroll(targetElement, 1500); // duração em ms (aqui 1.5 seg)
    }
  });
});
 const carousel = document.getElementById("carousel");
  document.getElementById("nextBtn").addEventListener("click", () => {
    carousel.scrollBy({ left: 320, behavior: "smooth" });
  });
  document.getElementById("prevBtn").addEventListener("click", () => {
    carousel.scrollBy({ left: -320, behavior: "smooth" });
  });
  
