// Theme: load saved preference, default dark if preferred
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const dark = saved ? saved === "dark" : prefersDark;
  document.documentElement.classList.toggle("dark", dark);
})();

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");
const header = document.querySelector("header");

themeBtn.addEventListener("click", () => {
  const nowDark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", nowDark);
  localStorage.setItem("theme", nowDark ? "dark" : "light");
});

// Mobile menu
menuBtn.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    const y = el.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: y, behavior: "smooth" });

    links.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Sticky header background on scroll
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 8;
  header.style.background = scrolled ? "hsl(var(--bg) / 0.8)" : "transparent";
  header.style.backdropFilter = scrolled ? "blur(12px)" : "none";
  header.style.borderBottom = scrolled ? "1px solid hsl(var(--border))" : "1px solid transparent";
});

// Reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
