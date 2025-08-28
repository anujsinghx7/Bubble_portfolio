
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.progress-bar').forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
          bar.style.width = progress + '%';
        }, 500);
      });
    });
    document.querySelectorAll('.progress-bar').forEach(bar => {
      const percent = bar.getAttribute('data-progress');
      const tooltip = document.createElement('span');
      tooltip.className = 'skill-tooltip';
      tooltip.textContent = percent + '%';
      bar.parentElement.appendChild(tooltip);
    });
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    let dark = true;
    themeToggle.addEventListener('click', () => {
      dark = !dark;
      if (dark) {
        document.body.style.background = 'linear-gradient(135deg, #232526 0%, #3a3dff 50%, #a259ff 100%)';
        document.body.style.color = '#fff';
        themeIcon.textContent = '🌙';
        themeToggle.classList.remove('light');

        document.querySelector('.container').style.background = 'rgba(40, 40, 80, 0.55)';
        document.querySelectorAll('.card').forEach(card => {
          card.style.background = 'rgba(30, 32, 60, 0.95)';
          card.style.borderColor = '#a259ff33';
        });
        document.querySelectorAll('.skill').forEach(skill => {
          skill.style.background = 'rgba(30, 32, 60, 0.85)';
          skill.style.borderColor = '#a259ff33';
        });
        document.querySelectorAll('input, textarea').forEach(el => {
          el.style.background = 'rgba(30, 32, 60, 0.85)';
          el.style.color = '#fff';
          el.style.borderColor = '#a259ff33';
        });
      } else {
        document.body.style.background = 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)';
        document.body.style.color = '#232526';
        themeIcon.textContent = '☀️';
        themeToggle.classList.add('light');
        document.querySelector('.container').style.background = 'rgba(255,255,255,0.85)';
        document.querySelectorAll('.card').forEach(card => {
          card.style.background = 'rgba(255,255,255,0.98)';
          card.style.borderColor = '#c3bfff';
          card.style.color = '#232526';
          card.querySelectorAll('a').forEach(a => a.style.color = '#6c3cff');
        });
        document.querySelectorAll('.skill').forEach(skill => {
          skill.style.background = 'rgba(245,245,255,0.95)';
          skill.style.borderColor = '#c3bfff';
          skill.style.color = '#232526';
        });
        document.querySelectorAll('input, textarea').forEach(el => {
          el.style.background = 'rgba(255,255,255,0.98)';
          el.style.color = '#232526';
          el.style.borderColor = '#c3bfff';
        });
        document.querySelectorAll('.progress-bar').forEach(bar => {
          bar.style.background = 'linear-gradient(90deg, #6c3cff 0%, #3a3dff 100%)';
          bar.style.boxShadow = '0 0 8px #bdb7ff88';
        });
        document.querySelectorAll('section h2').forEach(h2 => {
          h2.style.color = '#6c3cff';
          h2.style.borderBottom = '1.5px solid #6c3cff';
        });
        document.querySelectorAll('.social a').forEach(a => {
          a.style.color = '#6c3cff';
        });
      }
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const form = this;
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          alert('Thank you for reaching out! I will respond soon.');
          form.reset();
        } else {
          alert('Sorry, there was a problem. Please try again later.');
        }
      })
      .catch(() => {
        alert('Sorry, there was a problem. Please try again later.');
      });
    });

    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = Array.from(document.querySelectorAll('section'));
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });

      const backToTop = document.getElementById('backToTop');
      if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
      } else {
        backToTop.style.display = 'none';
      }
    });

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 901) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
        }
      });
    });

    document.querySelectorAll('.card').forEach(card => {
  card.style.transition = 'transform 0.15s cubic-bezier(.4,0,.2,1), box-shadow 0.15s cubic-bezier(.4,0,.2,1)';
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 18;
    const rotateY = ((x - centerX) / centerX) * 18;
    card.style.transform = `perspective(700px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
    card.classList.add('tilted');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.classList.remove('tilted');
  });
});

    const cursorLight = document.getElementById('cursorLight');
    document.addEventListener('mousemove', (e) => {
      cursorLight.style.left = (e.clientX) + 'px'; 
      cursorLight.style.top = (e.clientY) + 'px';  
    });

    document.getElementById('backToTop').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const allSections = document.querySelectorAll('section');
    function revealSections() {
      allSections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
          sec.classList.add('visible');
        }
      });
    }
    window.addEventListener('scroll', revealSections);
    window.addEventListener('DOMContentLoaded', revealSections);

    const typewriterTexts = [
      "Passionate about technology, AI, and web development.",
      "I love building things with code.",
      "Always learning. Always creating."
    ];
    let twIndex = 0, charIndex = 0, twForward = true;
    const typewriter = document.getElementById('typewriter');
    function type() {
      if (!typewriter) return;
      if (twForward) {
        typewriter.textContent = typewriterTexts[twIndex].slice(0, ++charIndex);
        if (charIndex === typewriterTexts[twIndex].length) {
          twForward = false;
          setTimeout(type, 1200);
        } else {
          setTimeout(type, 40);
        }
      } else {
        typewriter.textContent = typewriterTexts[twIndex].slice(0, --charIndex);
        if (charIndex === 0) {
          twForward = true;
          twIndex = (twIndex + 1) % typewriterTexts.length;
          setTimeout(type, 400);
        } else {
          setTimeout(type, 20);
        }
      }
    }
    window.addEventListener('DOMContentLoaded', type);

function createFloatingShapes() {
  const shapes = document.querySelector('.floating-shapes');
  if (!shapes) return;
  const colors = [
    'linear-gradient(120deg, #a259ff99, #3a3dff66, #00ffe799)',
    'linear-gradient(120deg, #3a3dff99, #a259ff66, #00ffe799)',
    'linear-gradient(120deg, #00ffe799, #a259ff66, #3a3dff99)'
  ];

  function spawnBubble() {
    const s = document.createElement('div');
    s.className = 'floating-shape bubble-anim';
    const size = 30 + Math.random() * 70;
    s.style.width = s.style.height = `${size}px`;
    s.style.left = `${Math.random() * 100}%`;
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    const duration = 10 + Math.random() * 12;
    s.style.animationDuration = `${duration}s`;
    // Assign a random zigzag animation
    const zigzag = Math.random() > 0.5;
    s.style.animationName = zigzag ? 'floatShapeZigZag' : 'floatShape';
    if (zigzag) {
      s.style.setProperty('--zigzag', Math.random() > 0.5 ? 1 : -1);
    }
    shapes.appendChild(s);

    setTimeout(() => {
      s.remove();
    }, duration * 1000);
  }

  
  for (let i = 0; i < 18; i++) {
    spawnBubble();
  }

  setInterval(() => {
    spawnBubble();
  }, 900);
}
window.addEventListener('DOMContentLoaded', createFloatingShapes);

    function bubbleBurst(x, y) {
  const bubble = document.createElement('div');
  bubble.style.position = 'fixed';
  bubble.style.left = (x - 25) + 'px';
  bubble.style.top = (y - 25) + 'px';
  bubble.style.width = bubble.style.height = '50px';
  bubble.style.borderRadius = '50%';
  bubble.style.background = 'radial-gradient(circle at 60% 40%, #a259ff 0%, #3a3dff 80%, transparent 100%)';
  bubble.style.opacity = 0.8;
  bubble.style.pointerEvents = 'none';
  bubble.style.zIndex = 9999;
  bubble.style.transition = 'transform 0.5s cubic-bezier(.4,0,.2,1), opacity 0.5s';

  document.body.appendChild(bubble);

  setTimeout(() => {
    bubble.style.transform = 'scale(2.2)';
    bubble.style.opacity = 0.2;
  }, 20);

  setTimeout(() => {
    for (let i = 0; i < 8; i++) {
      const burst = document.createElement('div');
      burst.style.position = 'fixed';
      burst.style.left = (x - 6) + 'px';
      burst.style.top = (y - 6) + 'px';
      burst.style.width = burst.style.height = '12px';
      burst.style.borderRadius = '50%';
      burst.style.background = 'linear-gradient(135deg, #a259ff, #00ffe7)';
      burst.style.opacity = 0.7;
      burst.style.pointerEvents = 'none';
      burst.style.zIndex = 9999;
      burst.style.transition = 'transform 0.7s, opacity 0.7s';
      document.body.appendChild(burst);
      const angle = (i / 8) * 2 * Math.PI;
      setTimeout(() => {
        burst.style.transform = `translate(${Math.cos(angle) * 40}px, ${Math.sin(angle) * 40}px) scale(0.7)`;
        burst.style.opacity = 0;
      }, 10);
      setTimeout(() => burst.remove(), 800);
    }
    bubble.remove();
  }, 500);
}

    document.addEventListener('click', e => {
      if (!e.target.closest('button,input,textarea,a')) {
        bubbleBurst(e.clientX, e.clientY);
      }
    });
    const particleColors = ['#a259ff', '#3a3dff', '#00ffe7'];
function spawnParticle(x, y) {
  const p = document.createElement('div');
  p.style.position = 'fixed';
  p.style.left = x + 'px';
  p.style.top = y + 'px';
  p.style.width = p.style.height = (8 + Math.random() * 8) + 'px';
  p.style.borderRadius = '50%';
  p.style.pointerEvents = 'none';
  p.style.zIndex = 999;
  p.style.background = particleColors[Math.floor(Math.random() * particleColors.length)];
  p.style.opacity = 0.7;
  p.style.boxShadow = `0 0 16px 4px ${p.style.background}`;
  p.style.transition = 'opacity 0.7s, transform 0.7s';
  document.body.appendChild(p);
  setTimeout(() => {
    p.style.opacity = 0;
    p.style.transform = `scale(1.8) translateY(-16px)`;
  }, 10);
  setTimeout(() => p.remove(), 700);
}
document.addEventListener('mousemove', e => {
  spawnParticle(e.clientX, e.clientY);
});

fetch('https://leetcode-stats-api.herokuapp.com/anujsinghx7')
  .then(res => res.json())
  .then(data => {
    document.getElementById('leetcode-tracker').innerHTML = `
      <strong>LeetCode Stats:</strong><br>
      Total Solved: ${data.totalSolved}<br>
      Easy: ${data.easySolved}, Medium: ${data.mediumSolved}, Hard: ${data.hardSolved}<br>
      Ranking: ${data.ranking}
    `;
  });

  
