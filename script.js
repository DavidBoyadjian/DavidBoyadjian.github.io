const root = document.documentElement;
const themeButton = document.getElementById("themeBtn");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".site-header");
const progress = document.getElementById("scrollProgress");

themeButton?.addEventListener("click", () => {
  const dark = !root.classList.contains("dark");

  root.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
});

menuButton?.addEventListener("click", () => {
  const open = navLinks?.classList.toggle("open") ?? false;

  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const selector = link.getAttribute("href");
    const target =
      selector === "#" ? null : document.querySelector(selector);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    navLinks?.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

function updateScrollUI() {
  const top = window.scrollY;
  const available =
    document.documentElement.scrollHeight - window.innerHeight;

  header?.classList.toggle("scrolled", top > 12);

  if (progress) {
    progress.style.width = `${
      available > 0 ? (top / available) * 100 : 0
    }%`;
  }
}

updateScrollUI();

window.addEventListener("scroll", updateScrollUI, {
  passive: true,
});

const revealElements = document.querySelectorAll(
  ".reveal:not(.visible)"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -35px",
    }
  );

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${
      Math.min(index % 4, 3) * 55
    }ms`;

    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

const observedSections = [
  ...document.querySelectorAll(".section-anchor"),
];

const sectionLinks = [
  ...document.querySelectorAll(".nav-links a"),
];

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (first, second) =>
            second.intersectionRatio - first.intersectionRatio
        )[0];

      if (!visible) return;

      sectionLinks.forEach((link) => {
        const active =
          link.getAttribute("href") === `#${visible.target.id}`;

        link.classList.toggle("active", active);

        if (active) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      rootMargin: "-25% 0px -60%",
      threshold: [0, 0.2, 0.5],
    }
  );

  observedSections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

const courseData = {
  digital: [
    "ECE 2300/L",
    "Digital Logic Design",
    "Combinational and sequential logic, Boolean algebra, digital design methods, and laboratory implementation.",
  ],

  circuits: [
    "ECE 1101/L",
    "Electrical Circuit Analysis I",
    "Fundamental circuit laws, time-domain analysis, differential equations, computer tools, and supporting laboratory experiments.",
  ],

  python: [
    "CS 1260",
    "Python Programming",
    "Problem solving with expressions, control structures, data collections, functions, file I/O, exceptions, and object-oriented programming.",
  ],

  cpp: [
    "ECE 1310 / 2310",
    "C/C++ Programming",
    "Engineering problem solving, structured programming, object-oriented design, and software development using C and C++.",
  ],

  statistics: [
    "STA 2260",
    "Statistics",
    "Statistical reasoning, probability-based analysis, estimation, inference, and interpretation of real data.",
  ],

  microelectronics: [
    "ECE 2200",
    "Introduction to Microelectronics",
    "Semiconductor devices, diode and transistor models, and analysis of fundamental microelectronic circuits.",
  ],

  datascience: [
    "Data Science",
    "Fundamentals of Data Science",
    "Data preparation, exploration, visualization, modeling, and computational methods for extracting insight from data.",
  ],

  microcontrollers: [
    "ECE 3301/L",
    "Microcontrollers",
    "Microcontroller architecture, embedded C firmware, peripherals, interfacing, timing, and hands-on laboratory development.",
  ],

  oop: [
    "ECE 2310",
    "Object-Oriented Programming",
    "Software design using classes, objects, inheritance, polymorphism, data structures, and reusable programming practices.",
  ],
};

const modal = document.getElementById("courseModal");
const modalCard = modal?.querySelector(".modal-card");
const modalCode = document.getElementById("courseModalCode");
const modalTitle = document.getElementById("courseModalTitle");
const modalDescription = document.getElementById(
  "courseModalDescription"
);

let lastFocused;

function openCourseModal(key) {
  const course = courseData[key];

  if (
    !course ||
    !modal ||
    !modalCode ||
    !modalTitle ||
    !modalDescription
  ) {
    return;
  }

  lastFocused = document.activeElement;

  modalCode.textContent = course[0];
  modalTitle.textContent = course[1];
  modalDescription.textContent = course[2];

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");

  modalCard?.focus();
}

function closeCourseModal() {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  lastFocused?.focus();
}

document
  .querySelectorAll(".course-tags button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      openCourseModal(button.dataset.course);
    });
  });

document
  .querySelectorAll("[data-close-modal]")
  .forEach((button) => {
    button.addEventListener("click", closeCourseModal);
  });

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    modal?.classList.contains("open")
  ) {
    closeCourseModal();
  }
});

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
