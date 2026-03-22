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

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    const nowDark = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
  });
}

// Mobile menu
if (menuBtn && links) {
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();

    const headerOffset = 85;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (links && menuBtn) {
      links.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });
});

// Fixed header styling on scroll
if (header) {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 8;
    header.style.background = scrolled ? "hsl(var(--bg) / 0.85)" : "hsl(var(--bg) / 0.8)";
    header.style.backdropFilter = "blur(12px)";
    header.style.borderBottom = "1px solid hsl(var(--border))";
  });
}

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

// Course modal
const courseData = {
  python: {
    code: "CS1260",
    title: "Python",
    description:
      "Basic concepts of computer software and programming. Numbers, strings, and basic I/O. Expressions, control structures, lists, tuples, and functions. File I/O and introduction to exception handling. Introduction to object-oriented programming. Problem-solving techniques."
  },
  circuit: {
    code: "ECE1101",
    title: "Circuit Analysis I",
    description:
      "Introduction to the fundamental laws of electric circuits, applications to circuit analysis, matrix methods. An introduction to circuit analysis in the time domain using differential equations with computer tools. Selected laboratory experiments emphasizing the supporting the topics covered in ECE 1101."
  }
};

const courseModal = document.getElementById("courseModal");
const courseModalBackdrop = document.getElementById("courseModalBackdrop");
const courseModalClose = document.getElementById("courseModalClose");
const courseModalCode = document.getElementById("courseModalCode");
const courseModalTitle = document.getElementById("courseModalTitle");
const courseModalDescription = document.getElementById("courseModalDescription");

function openCourseModal(courseKey) {
  if (!courseModal || !courseModalCode || !courseModalTitle || !courseModalDescription) return;

  const course = courseData[courseKey];
  if (!course) return;

  courseModalCode.textContent = course.code;
  courseModalTitle.textContent = course.title;
  courseModalDescription.textContent = course.description;

  courseModal.classList.add("open");
  courseModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCourseModal() {
  if (!courseModal) return;

  courseModal.classList.remove("open");
  courseModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".tag-button").forEach((button) => {
  button.addEventListener("click", () => {
    openCourseModal(button.dataset.course);
  });
});

if (courseModalClose) {
  courseModalClose.addEventListener("click", closeCourseModal);
}

if (courseModalBackdrop) {
  courseModalBackdrop.addEventListener("click", closeCourseModal);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && courseModal && courseModal.classList.contains("open")) {
    closeCourseModal();
  }
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
