document.addEventListener('DOMContentLoaded', function() {
  // Add parallax effect to background elements
  window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    
    // Parallax for glow circles
    document.querySelectorAll('.glow-circle').forEach((circle, index) => {
      const speed = 0.05 + (index * 0.02);
      circle.style.transform = `translateY(${scrollY * speed}px)`;
    });
    
    // Parallax for decorative elements
    document.querySelectorAll('.decorative-hexagon').forEach((hexagon, index) => {
      const speed = 0.03 + (index * 0.01);
      hexagon.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.05}deg)`;
    });
    
    document.querySelectorAll('.decorative-line').forEach((line, index) => {
      const speed = 0.02 + (index * 0.01);
      line.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
  
  // Create subtle floating particles in the background
  createParticles();
  
  // Add intersection observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.reveal-animation').forEach(el => {
    observer.observe(el);
  });
  
  // Add hover effect to cards
  document.querySelectorAll('.reinvent-card, .reinvent-card-highlight').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate position as percentage
      const posX = x / rect.width;
      const posY = y / rect.height;
      
      // Calculate rotation (subtle)
      const rotateX = (posY - 0.5) * 4; // -2 to 2 degrees
      const rotateY = (0.5 - posX) * 4; // -2 to 2 degrees
      
      // Apply transform
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      
      // Add highlight effect
      const highlight = `radial-gradient(circle at ${posX * 100}% ${posY * 100}%, rgba(111, 66, 193, 0.15), transparent 80%)`;
      card.style.backgroundImage = highlight;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.backgroundImage = '';
    });
  });
  
  // Create hexagon background
  createHexagonBackground();
});

function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('particles-container');
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '1';
  document.body.appendChild(particlesContainer);
  
  const particleCount = 15;
  const colors = ['#8A2BE2', '#6A0DAD', '#FF69B4', '#FF8C00', '#4B0082'];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random size between 1-3px (subtle)
    const size = Math.random() * 2 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Lower opacity for subtlety
    particle.style.opacity = Math.random() * 0.3 + 0.05;
    
    // Random color from the purple palette
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    // Styling
    particle.style.position = 'absolute';
    particle.style.borderRadius = '50%';
    particle.style.background = color;
    particle.style.boxShadow = `0 0 8px ${color}`;
    
    // Animation
    particle.style.animation = `float ${Math.random() * 15 + 15}s ease-in-out infinite`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    particlesContainer.appendChild(particle);
  }
}

function createHexagonBackground() {
  const hexContainer = document.createElement('div');
  hexContainer.classList.add('hexagon-container');
  hexContainer.style.position = 'fixed';
  hexContainer.style.top = '0';
  hexContainer.style.left = '0';
  hexContainer.style.width = '100%';
  hexContainer.style.height = '100%';
  hexContainer.style.pointerEvents = 'none';
  hexContainer.style.zIndex = '0';
  document.body.appendChild(hexContainer);
  
  const hexCount = 20;
  
  for (let i = 0; i < hexCount; i++) {
    const hexagon = document.createElement('div');
    hexagon.classList.add('decorative-hexagon');
    
    // Random size
    const size = Math.random() * 100 + 50;
    hexagon.style.width = `${size}px`;
    hexagon.style.height = `${size * 0.866}px`; // Height of a hexagon is width * sin(60°)
    
    // Random position
    hexagon.style.left = `${Math.random() * 100}%`;
    hexagon.style.top = `${Math.random() * 100}%`;
    
    // Low opacity
    hexagon.style.opacity = Math.random() * 0.1 + 0.02;
    
    // Styling
    hexagon.style.position = 'absolute';
    hexagon.style.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)';
    
    // Random gradient
    const gradientType = Math.random() > 0.5 ? 'linear' : 'radial';
    const gradientColors = [
      '#8A2BE2', // Purple
      '#6A0DAD', // Dark purple
      '#4B0082', // Indigo
      '#191970', // Midnight blue
      '#FF69B4', // Pink
      '#FF8C00'  // Orange
    ];
    
    const color1 = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    const color2 = gradientColors[Math.floor(Math.random() * gradientColors.length)];
    
    if (gradientType === 'linear') {
      const angle = Math.floor(Math.random() * 360);
      hexagon.style.background = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    } else {
      hexagon.style.background = `radial-gradient(circle, ${color1}, ${color2})`;
    }
    
    // Animation
    const animationDuration = Math.random() * 30 + 30;
    hexagon.style.animation = `float ${animationDuration}s ease-in-out infinite`;
    hexagon.style.animationDelay = `${Math.random() * 10}s`;
    
    hexContainer.appendChild(hexagon);
  }
}

// Add CSS for animations and effects
const style = document.createElement('style');
style.textContent = `
  .particle {
    transform-origin: center;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-20px) translateX(10px);
    }
    50% {
      transform: translateY(0) translateX(20px);
    }
    75% {
      transform: translateY(20px) translateX(10px);
    }
  }
  
  .decorative-hexagon {
    transform-origin: center;
    transition: all 0.5s ease;
    box-shadow: 0 0 30px rgba(138, 43, 226, 0.2);
  }
`;
document.head.appendChild(style);
