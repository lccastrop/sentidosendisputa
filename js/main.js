/* ===========================
   Sentidos en Disputa (SED) — JS
   =========================== */

(() => {
  // --- Nav toggle (mobile) ---
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open);
    });

    // Cerrar al hacer clic en enlace
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // --- Marcar enlace activo ---
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath) {
      link.classList.add('active');
    }
  });

  // --- Formulario de contacto ---
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Enviando…';
      btn.disabled = true;

      // Simular envío (reemplazar con lógica real)
      setTimeout(() => {
        btn.textContent = 'Mensaje enviado';
        btn.style.background = '#3a6b3a';
        form.reset();
      }, 1200);
    });
  }

  // --- Animación de entrada con IntersectionObserver ---
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });
})();
