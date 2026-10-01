/* NDT Master marketing site — minimal vanilla JS
   Features:
     1. Mobile nav open/close
     2. Auto-close nav after anchor click on mobile
     3. Highlight nav brand + close toggle on outside click
*/

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  if (!toggle || !links || !nav) return;

  function setOpen(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle.addEventListener('click', function () {
    const isOpen = links.classList.contains('open');
    setOpen(!isOpen);
  });

  // Close on anchor click (mobile only)
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.matchMedia('(max-width: 768px)').matches) {
        setOpen(false);
      }
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!links.classList.contains('open')) return;
    if (nav.contains(e.target)) return;
    setOpen(false);
  });

  // Close on resize past mobile breakpoint
  window.addEventListener('resize', function () {
    if (!window.matchMedia('(max-width: 768px)').matches) {
      setOpen(false);
    }
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      setOpen(false);
    }
  });
})();