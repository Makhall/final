window.addEventListener('DOMContentLoaded', function() {
  var navbarLinks = document.querySelectorAll('.navbar a');
  var modeToggle = document.getElementById('mode-toggle');
  var menuToggle = document.getElementById('menu-toggle');
  var body = document.body;

  menuToggle.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
  });

  navbarLinks.forEach(function(link) {
    link.addEventListener('click', smoothScroll);
  });

  modeToggle.addEventListener('click', toggleMode);

  function smoothScroll(event) {
    event.preventDefault();
    var targetId = this.getAttribute('href');
    var targetPosition = document.querySelector(targetId).offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }

  function toggleMode() {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
  }
});

