// Theme: load saved preference, default dark
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = saved ? saved === 'dark' : prefersDark;
  document.documentElement.classList.toggle('dark', dark);
})();

document.getElementById('themeBtn').addEventListener('click', () => {
  const nowDark = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', nowDark);
  localStorage.setItem('theme', nowDark ? 'dark' : 'light');
});

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70; // header offset
    window.scrollTo({ top: y, behavior: 'smooth' });
    // close mobile menu if open
    links.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

// Mobile menu
const menuBtn = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');
menuBtn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

// Sticky header background on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.style.background = window.scrollY > 8 ? 'hsl(var(--bg) / 0.75)' : 'transparent';
  header.style.backdropFilter = window.scrollY > 8 ? 'blur(10px)' : 'none';
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
