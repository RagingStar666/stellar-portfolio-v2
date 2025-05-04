  function generateParticles(n) {
    let value = `${getRandom(2560)}px ${getRandom(2560)}px #000`;
    for (let i = 2; i <= n; i++) {
      value += `, ${getRandom(2560)}px ${getRandom(2560)}px #000`;
    }
    return value;
  }

  function generateStars(n) {
  // Use a teal color for stars in dark mode
  let value = `${getRandom(2560)}px ${getRandom(2560)}px #3be9d1`;
  for (let i = 2; i <= n; i++) {
    value += `, ${getRandom(2560)}px ${getRandom(2560)}px #3be9d1`;
  }
  return value;
}

function generateLightModeStars(n) {
  // Use golden color for stars in light mode
  let value = `${getRandom(2560)}px ${getRandom(2560)}px #ffd700`;
    for (let i = 2; i <= n; i++) {
    value += `, ${getRandom(2560)}px ${getRandom(2560)}px #ffd700`;
    }
    return value;
  }

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

  function initBG() {
    const particlesSmall = generateParticles(1000);
    const particlesMedium = generateParticles(500);
    const particlesLarge = generateParticles(250);
    const particles1 = document.getElementById('particles1');
    const particles2 = document.getElementById('particles2');
    const particles3 = document.getElementById('particles3');

    if (particles1) {
      particles1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${particlesSmall};
      animation: animStar 50s linear infinite;
      `;
    }

    if (particles2) {
      particles2.style.cssText = `
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      box-shadow: ${particlesMedium};
      animation: animateParticle 100s linear infinite;
      `;
    }

    if (particles3) {
      particles3.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${particlesLarge};
      animation: animateParticle 150s linear infinite;
      `;
    }

    const starsSmall = generateStars(1000);
    const starsMedium = generateStars(500);
    const starsLarge = generateStars(250);
  
  const lightStarsSmall = generateLightModeStars(1000);
  const lightStarsMedium = generateLightModeStars(500);
  const lightStarsLarge = generateLightModeStars(250);
  
    const stars1 = document.getElementById('stars1');
    const stars2 = document.getElementById('stars2');
    const stars3 = document.getElementById('stars3');

    if (stars1) {
      stars1.style.cssText = `
      width: 1px;
      height: 1px;
      border-radius: 50%;
      box-shadow: ${starsSmall};
      `;
    }

    if (stars2) {
      stars2.style.cssText = `
      width: 1.5px;
      height: 1.5px;
      border-radius: 50%;
      box-shadow: ${starsMedium};
      `;
    }

    if (stars3) {
      stars3.style.cssText = `
      width: 2px;
      height: 2px;
      border-radius: 50%;
      box-shadow: ${starsLarge};
      `;
    }
  
  // Initialize particle.js
  initParticles();
}

function initParticles() {
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer) {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#3be9d1"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#3be9d1",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
}

// Handle theme changes for stars
function updateStarsForTheme() {
  const isDarkMode = document.documentElement.classList.contains('dark');
  const stars1 = document.getElementById('stars1');
  const stars2 = document.getElementById('stars2');
  const stars3 = document.getElementById('stars3');
  
  if (isDarkMode) {
    const starsSmall = generateStars(1000);
    const starsMedium = generateStars(500);
    const starsLarge = generateStars(250);
    
    if (stars1) stars1.style.boxShadow = starsSmall;
    if (stars2) stars2.style.boxShadow = starsMedium;
    if (stars3) stars3.style.boxShadow = starsLarge;
  } else {
    const lightStarsSmall = generateLightModeStars(1000);
    const lightStarsMedium = generateLightModeStars(500);
    const lightStarsLarge = generateLightModeStars(250);
    
    if (stars1) stars1.style.boxShadow = lightStarsSmall;
    if (stars2) stars2.style.boxShadow = lightStarsMedium;
    if (stars3) stars3.style.boxShadow = lightStarsLarge;
  }
}

// Listen for theme changes
document.addEventListener('theme-change', updateStarsForTheme);
  document.addEventListener('astro:after-swap', initBG);
  initBG();