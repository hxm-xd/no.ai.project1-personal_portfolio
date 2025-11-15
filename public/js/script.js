// Unified initialization
document.addEventListener("DOMContentLoaded", init);

const API_BASE = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
  ? 'http://localhost:5050/api'
  : 'https://no-ai-portfolio.onrender.com/api';

function init(){
  initParticles();
  initReveal();
  initHeaderScroll();
  initSlideshow();
  loadAbout();
  loadSkills();
  loadProjects();
  loadVolunteering();
}

function initParticles(){
  particlesJS("particles-js", {
    particles: {
      number: { value: 250 },
      size: { value: 2 },
      move: { speed: 0.6 },
      color: { value: "#8a2be2" },
      line_linked: { enable: true, distance: 150, color: "#8a2be2", opacity: 0.8, width: 0.5 }
    }
  });
}

function initReveal(){
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('active'); } });
  }, { threshold: 0.2 });
  reveals.forEach(el => observer.observe(el));
}

function initHeaderScroll(){
  const header = document.querySelector('#navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) header.classList.add('shrink','white-nav');
    else header.classList.remove('shrink','white-nav');
  });
}

function initSlideshow(){
  const images = [
    '/images/Pera_me.jpg', '/images/Me_wrkshp.jpg', '/images/Me_sprit.jpg',
    '/images/Me_pera2.jpg', '/images/Me_wrkshp2.jpg'
  ];
  let index = 0;
  const slideshow = document.getElementById('photos-me');
  if(!slideshow) return;
  setTimeout(() => {
    setInterval(() => {
      slideshow.style.opacity = 0;
      setTimeout(() => {
        index = (index + 1) % images.length;
        slideshow.src = images[index];
        slideshow.style.opacity = 1;
      }, 300);
    }, 3000);
  }, 3000);
}

function loadAbout(){
  const aboutText = document.querySelector('.about-text');
  const aboutImage = document.querySelector('.pic-me');
  if(!aboutText) return;
  fetch(`${API_BASE}/about`)
    .then(r => r.json())
    .then(data => {
      aboutText.innerHTML = data.description || 'About info coming soon.';
      if (data.image) aboutImage.src = data.image;
    })
    .catch(err => console.error('About fetch error:', err));
}

function loadSkills(){
  const skillsContainer = document.querySelector('.skills-container');
  if(!skillsContainer) return;
  showSkeleton(skillsContainer, 3);
  fetch(`${API_BASE}/skills`)
    .then(r => r.json())
    .then(skills => {
      skillsContainer.innerHTML = '';
      skills.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill';
        skillDiv.innerHTML = `
          <p>${skill.category}</p>
          <div class="skill-bar">
            <div class="level" data-level="${skill.level}%"></div>
          </div>
          <ul class="tools">${(skill.tools||[]).map(t => `<li>${t}</li>`).join('')}</ul>`;
        skillsContainer.appendChild(skillDiv);
      });
      animateSkillBars();
    })
    .catch(err => {
      console.error('Skills fetch error:', err);
      skillsContainer.innerHTML = '<p style="color:#ff6b6b;">Failed to load skills.</p>';
    });
}

function animateSkillBars(){
  const levels = document.querySelectorAll('.level');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const bar = entry.target;
        bar.style.width = bar.dataset.level;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.4 });
  levels.forEach(l => observer.observe(l));
}

function loadProjects(){
  const projectContainer = document.querySelector('.projects-cards');
  if(!projectContainer) return;
  showSkeleton(projectContainer, 4);
  fetch(`${API_BASE}/projects`)
    .then(r => r.json())
    .then(projects => {
      projectContainer.innerHTML = '';
      projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <a href="${p.link}" target="_blank" rel="noopener noreferrer"><h1>${p.title}</h1></a>
          <p>${p.timeframe}</p>
          <div class="card-content">
            <p>${p.description}</p>
            <ul class="tools">${(p.toolList||[]).map(t => `<li>${t}</li>`).join('')}</ul>
          </div>`;
        projectContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Projects fetch error:', err);
      projectContainer.innerHTML = '<p style="color:#ff6b6b;">Failed to load projects.</p>';
    });
}

function loadVolunteering(){
  const volunteeringContainer = document.querySelector('.volunteering .vol-grid');
  if(!volunteeringContainer) return;
  showSkeleton(volunteeringContainer, 3);
  fetch(`${API_BASE}/volunteering`)
    .then(r => r.json())
    .then(list => {
      volunteeringContainer.innerHTML = '';
      if(!Array.isArray(list) || list.length === 0){
        volunteeringContainer.innerHTML = '<p style="color:#ccc;text-align:center;width:100%;">No volunteering data available.</p>';
        return;
      }
      list.forEach(item => {
        const card = document.createElement('div');
        card.className = 'vol-card';
        card.innerHTML = `
          <div class="vol-head">
            <i class="fa-solid fa-handshake-angle"></i>
            <div class="meta">
              <h2 class="vol-title">${item.org}</h2>
              <span class="chip year">${item.year}</span>
            </div>
          </div>
          <ul class="positions">
            ${(item.positions||[]).map(pos => `
              <li>
                <span class="role">${pos.role}</span>
                <span class="chip date">${pos.date}</span>
              </li>`).join('')}
          </ul>`;
        volunteeringContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Volunteering fetch error:', err);
      volunteeringContainer.innerHTML = '<p style="color:#ff6b6b;text-align:center;width:100%;">Failed to load volunteering data.</p>';
    });
}

function showSkeleton(container, count){
  container.innerHTML = '';
  for(let i=0;i<count;i++){
    const sk = document.createElement('div');
    sk.className = 'skel';
    sk.innerHTML = '<div class="skel-line" style="width:60%"></div><div class="skel-line" style="width:40%"></div>';
    container.appendChild(sk);
  }
}
