particlesJS("particles-js", {
 particles: {
  number: { value: 250 },
   size: { value: 2 },
   move: { speed: 0.6 },
   color: { value: "#8a2be2"},
  line_linked: {
    enable: true,
   distance: 150,
   color: "#8a2be2",
   opacity: 0.8,
   width: 0.5,
    }, 
   },
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  }, {threshold: 0.2});
  reveals.forEach(el => observer.observe(el));
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
});

document.addEventListener("DOMContentLoaded", () => {
  const images = ["../images/Pera_me.jpg", "../images/Me_wrkshp.jpg", "../images/Me_sprit.jpg"
    ,"../images/Me_pera2.jpg", "../images/Me_wrkshp2.jpg"
  ];

  let index = 0;
  const slideshow = document.getElementById("photos-me");

setTimeout(() => {
  setInterval(() => {
    slideshow.style.opacity = 0;
      setTimeout(() => {
        index = (index + 1) % images.length;
        slideshow.src = images[index];
        slideshow.style.opacity = 1;
      },300);
    }, 3000);
  },3000);
});

function initMap(){

  const location = {lat: 7.2906, lng: 80.6337 };
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
  });

  new google.maps.Marker({
    position: location,
    map: map,
    title: "Kandy City",
  });

}