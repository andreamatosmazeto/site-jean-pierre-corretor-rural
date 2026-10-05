(function () {
  // menu mobile
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');
  if (btn && nav) {
    var fechar = function () {
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Abrir menu');
    };
    btn.addEventListener('click', function () {
      var aberto = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(aberto));
      btn.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { fechar(); btn.focus(); }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fechar();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) fechar();
    });
  }

  // revelar ao rolar
  var itens = document.querySelectorAll('.rv');
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduz) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    itens.forEach(function (el) { io.observe(el); });
  } else {
    itens.forEach(function (el) { el.classList.add('in'); });
  }
})();
