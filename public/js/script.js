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


//Fetch About data
document.addEventListener("DOMContentLoaded", () =>{

  const aboutText = document.querySelector(".about-text");
  const aboutImage = document.querySelector(".pic-me");

  fetch("https://no-ai-portfolio.onrender.com/api/about")
  .then(res => res.json())
    .then(data =>{
      aboutText.innerHTML = data.description;
      aboutImage.src = data.image;
    })
    .catch(err => console.log("Error fetching about data: ", err));
}); 

//Fetch skills
document.addEventListener("DOMContentLoaded", () => {
  const skillsContainer = document.querySelector(".skills-container");

  fetch("https://no-ai-portfolio.onrender.com/api/skills")
    .then(res => res.json())
    .then(skills => {
      skillsContainer.innerHTML = "";

      skills.forEach(skill => {
        const skillDiv = document.createElement("div");
        skillDiv.className = "skill";
        skillDiv.innerHTML = `
          <p>${skill.category}</p>
          <div class="skill-bar">
            <div class="level" data-level="${skill.level}%"></div>
          </div>
          <ul class="tools">
            ${skill.tools.map(tool => `<li>${tool}</li>`).join('')}
          </ul>
        `;
        skillsContainer.appendChild(skillDiv);
      });

      // Animate bars when they come into view
      const levels = document.querySelectorAll('.level');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.dataset.level;
            observer.unobserve(bar);
          }
        });
      }, { threshold: 0.4 });

      levels.forEach(level => observer.observe(level));
    })
    .catch(err => console.error("Error fetching skill details: ", err));
});


//Fetch projects
document.addEventListener("DOMContentLoaded", () => {

  const projectContainer = document.querySelector(".projects-cards");

  fetch("https://no-ai-portfolio.onrender.com/api/projects")
  .then((res) => res.json())
    .then((projects) => {
      projectContainer.innerHTML = "";
      projects.forEach((project) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <a href="${project.link}" target="_blank"><h1>${project.title}</h1></a>
          <p>${project.timeframe}</p>
          <div class="card-content">
            <p>${project.description}</p>
            <ul class="tools">
              ${project.toolList.map(tool => `<li>${tool}</li>`).join('')}
            </ul>
          </div>`;
      projectContainer.appendChild(card);
    });
  })
.catch((err) => console.error("Error fetching projects: ", err));
});

//Fetch volunteering details
document.addEventListener("DOMContentLoaded", () => {

  const volunteeringContainer = document.querySelector(".volunteering");

  fetch("https://no-ai-portfolio.onrender.com/api/volunteering")
    .then((res) => res.json())
      .then((volunteering) => {
        volunteeringContainer.innerHTML = "";
        volunteering.forEach((volunteering) =>{
          const vol_card = document.createElement("div");
          vol_card.className = "vol-card";
          vol_card.innerHTML = `
          <h2 class="vol-title">${volunteering.org}</h2>
          <p class="ex-yr">${volunteering.year}</p>
            <ul class="positions">
              ${volunteering.positions.map(role => `<li>${role.role}<p class "date">${role.date}</p></li>`).join('')}
            </ul>
          </div>`;
          volunteeringContainer.appendChild(vol_card);
        });
      })
    .catch((err) =>console.error("Error fetching Volunteering data: ",err));
});
