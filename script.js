/* =====================================================
   MOHAMMED LEKRAA — INTERACTIVE & ANIMATION ENGINE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. LOADER DE INICIALIZACIÓN
    const loader = document.getElementById("loader");
    const loaderBar = document.getElementById("loader-bar");
    const loaderCounter = document.getElementById("loader-counter");
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 5;
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                loader.classList.add("hidden");
            }, 300);
        }
        
        loaderBar.style.width = `${progress}%`;
        loaderCounter.textContent = `${progress}%`;
    }, 40);

    // 2. REVEAL ANIMATION (SCROLL REVEAL)
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach((el) => revealObserver.observe(el));

    // 3. EFECTO TILT PERSPECTIVA 3D PARA LA IMAGEN PRINCIPAL
    const imageCard = document.querySelector('.image-card');

    if (imageCard) {
        imageCard.addEventListener('mousemove', (e) => {
            const rect = imageCard.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;

            imageCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            imageCard.style.transition = 'transform 0.1s ease-out';
        });

        imageCard.addEventListener('mouseleave', () => {
            imageCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            imageCard.style.transition = 'transform 0.5s ease';
        });
    }
});
