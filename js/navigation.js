// JavaScript code for navigation menu functionality
document.addEventListener('DOMContentLoaded', function() {
  // Get the navigation links
  var navLinks = document.querySelectorAll('#main-nav a');

  // Add click event listener to each navigation link
  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      // Get the target section id from the link's href attribute
      var targetId = link.getAttribute('href').substring(1);

      // Scroll smoothly to the target section
      var targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
