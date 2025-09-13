const header = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
  if(window.scrollY > 50){ // scroll 50px down
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

document.addEventListener("DOMContentLoaded", () => {
      const header = document.querySelector("#navbar");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 600) {
          header.classList.add("shrink", "white-nav");
        } else {
          header.classList.remove("shrink", "white-nav");
        }
      });

      // Initialize particles.js
      particlesJS("particles-js", {
        particles: {
          number: { value: 250 },
          size: { value: 2 },
          move: { speed: 0.6 },
          color: { value: "#8a2be2" },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#8a2be2",
            opacity: 0.8,
            width: 0.5,
          },
        },
      });
    });

