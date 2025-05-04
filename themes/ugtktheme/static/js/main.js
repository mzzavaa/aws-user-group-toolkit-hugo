// Main JavaScript file for AWS User Group Toolkit website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations for elements that should animate when they enter the viewport
  initInViewAnimations();
  
  // Handle mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && 
        !mobileMenu.contains(event.target) && 
        !mobileMenuButton.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
});

// Function to initialize animations for elements that should animate when they enter the viewport
function initInViewAnimations() {
  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window) {
    const animatedElements = document.querySelectorAll('.animated-gradient');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-gradient-xy');
        } else {
          // Optionally remove the animation when out of view
          // entry.target.classList.remove('animate-gradient-xy');
        }
      });
    }, {
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }
}
