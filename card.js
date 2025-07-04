const containers = document.querySelectorAll('.card-container');

    containers.forEach(container => {
      const card = container.querySelector('.car-card');

      container.addEventListener('mousemove', e => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      container.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        card.style.transition = 'transform 0.4s ease';
      });

      container.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
});