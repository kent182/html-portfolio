document.querySelectorAll('nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href.startsWith('#')) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
