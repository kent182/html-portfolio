const containers = document.querySelectorAll('.card-container');

    containers.forEach(container => {
      const card = container.querySelector('.car-card');

      container.addEventListener('mousemove', e => {
        card.style.transform = `translateY(-10px) scale(1.03)`;
      });

      container.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.transition = 'transform 0.4s ease';
      });

      container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
});