document.addEventListener("DOMContentLoaded", () => {
  // 1. LOADER CONTROLLER
  const loaderFill = document.getElementById("loader-fill");
  const loaderCounter = document.getElementById("loader-counter");
  const loader = document.getElementById("loader");
  
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add("hidden");
      }, 300);
    }
    loaderFill.style.width = `${progress}%`;
    loaderCounter.textContent = `${progress}%`;
  }, 60);

  // 2. TILT EFFECT EN PORTRAIT CARD
  const card = document.getElementById("tilt-card");
  if (card) {
    document.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Cálculo de rotación suave
      const rotateX = ((clientY / innerHeight) - 0.5) * -10;
      const rotateY = ((clientX / innerWidth) - 0.5) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  }

  // 3. SCROLL REVEAL ANIMATION
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Disparo inicial
});
