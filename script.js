// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Nav background + scroll progress
const nav = document.querySelector('.nav');
const progress = document.querySelector('.progress');
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  nav.classList.toggle('scrolled', scrollY > 30);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const links = document.querySelector('.links');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

// Reveal on scroll (staggered per parent)
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const siblings = [...e.target.parentElement.children].filter(c => c.classList.contains('reveal'));
    e.target.style.transitionDelay = `${Math.min(siblings.indexOf(e.target), 5) * 80}ms`;
    e.target.classList.add('visible');
    revealObs.unobserve(e.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Animated counters
const countObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.count, start = performance.now();
    const step = now => {
      const t = Math.min((now - start) / 1200, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    countObs.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObs.observe(el));

// Active nav link
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.links a')];
const activeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
sections.forEach(s => activeObs.observe(s));

// Rotating word in hero
const rotator = document.querySelector('.rotator');
let wi = 0;
rotator.textContent = i18n.meta().words[0];
document.addEventListener('langchange', () => {
  rotator.textContent = i18n.meta().words[wi];
});
setInterval(() => {
  rotator.classList.add('out');
  setTimeout(() => {
    const words = i18n.meta().words;
    wi = (wi + 1) % words.length;
    rotator.textContent = words[wi];
    rotator.classList.remove('out');
  }, 300);
}, 2600);

// Spotlight on project cards
document.querySelectorAll('.proj').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});

// Copy e-mail
const copyBtn = document.querySelector('.copy-btn');
copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyBtn.dataset.copy);
    copyBtn.textContent = i18n.meta().copied;
  } catch {
    copyBtn.textContent = copyBtn.dataset.copy;
  }
  setTimeout(() => (copyBtn.textContent = i18n.t('contact.copy')), 2200);
});

// Hero background: a slowly drifting crystal lattice (atoms + bonds)
(() => {
  const canvas = document.getElementById('lattice');
  const ctx = canvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let w, h, atoms = [], mouse = { x: -999, y: -999 };

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round((w * h) / 16000);
    atoms = Array.from({ length: Math.min(n, 110) }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
      r: Math.random() * 2 + 1.2,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const a of atoms) {
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
      const dx = a.x - mouse.x, dy = a.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 120) { a.x += dx / d; a.y += dy / d; }
    }
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        const a = atoms[i], b = atoms[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(138, 90, 60, ${(1 - d / 130) * .35})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const a of atoms) {
      ctx.fillStyle = 'rgba(138, 90, 60, .55)';
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2); ctx.fill();
    }
    if (!reduced) requestAnimationFrame(draw);
  }

  canvas.parentElement.addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener('pointerleave', () => (mouse = { x: -999, y: -999 }));
  addEventListener('resize', resize);
  resize();
  draw();
})();
