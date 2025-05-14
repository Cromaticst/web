<body>
<script>
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu a');

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60;
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
  });
<script>
  const targetSection = document.getElementById('nuestro-adn');

  window.addEventListener('scroll', () => {
    // Activa la clase visible al hacer scroll
    const rect = targetSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (isVisible) {
      targetSection.classList.add('visible');
      targetSection.classList.remove('oculto');
    }

    // Marcar el enlace activo
    const navLinks = document.querySelectorAll('.menu a');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#nuestro-adn' && isVisible) {
        link.classList.add('active');
      }
    });
  });
</script>
<body>
	<script>
  document.querySelectorAll('.btn-cotizar').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById('cotizar');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
</script>

// JavaScript Document
// JavaScript Document