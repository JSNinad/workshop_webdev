// script.js

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // script.js

// Add animation to the link on click
document.querySelector('.animated-link').addEventListener('click', function(event) {
  event.preventDefault();
  event.target.classList.add('animated');
  setTimeout(function() {
    event.target.classList.remove('animated');
  }, 1000);
});

// script.js

function applyEffect() {
  var image = document.getElementById('myImage');
  image.classList.toggle('rotate');
}
