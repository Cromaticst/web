<script>
  // Resaltar enlace activo según sección visible
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

    // Mostrar sección "nuestro-adn" al hacer scroll
    const targetSection = document.getElementById('nuestro-adn');
    if (targetSection) {
      const rect = targetSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible) {
        targetSection.classList.add('visible');
        targetSection.classList.remove('oculto');
      }

      // Marcar el enlace activo para nuestro-adn
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#nuestro-adn') {
          link.classList.toggle('active', isVisible);
        }
      });
    }
  });

  // Scroll suave al hacer clic en botón cotizar
  document.querySelectorAll('.btn-cotizar').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.getElementById('cotizar');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animar fases al hacer clic en VER +
  document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-fases");

    toggleButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const container = btn.closest(".servicio-proceso").querySelector(".fases-container");
        const fases = container.querySelector(".fases");

        container.classList.toggle("active");
        fases.classList.toggle("show");

        btn.textContent = fases.classList.contains("show") ? "VER –" : "VER +";
      });
    });
  });
</script>



// JavaScript Document
// JavaScript Document
