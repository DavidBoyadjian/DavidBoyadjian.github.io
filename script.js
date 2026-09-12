// Load the saved theme or use the device preference
(function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const dark = saved ? saved === "dark" : prefersDark;

  document.documentElement.classList.toggle("dark", dark);
})();

const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.querySelector(".menu-toggle");
const links = document.querySelector(".links");
const header = document.querySelector(".site-header");

// Theme toggle
themeBtn?.addEventListener("click", () => {
  const dark = !document.documentElement.classList.contains("dark");

  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
});

// Mobile navigation
menuBtn?.addEventListener("click", () => {
  const open = links?.classList.toggle("open") ?? false;

  menuBtn.setAttribute("aria-expanded", String(open));
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const href = anchor.getAttribute("href");
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();

    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      75;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    links?.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

// Header styling while scrolling
window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle(
      "scrolled",
      window.scrollY > 12
    );
  },
  { passive: true }
);

// Reveal elements while scrolling
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("visible");
  });
}

// Course information
const courseData = {
  digital: {
    code: "ECE 2300/L",
    title: "Digital Logic Design",
    description:
      "Combinational and sequential logic, Boolean algebra, digital design methods, and laboratory implementation.",
  },

  circuits: {
    code: "ECE 1101/L",
    title: "Electrical Circuit Analysis I",
    description:
      "Fundamental circuit laws, time-domain analysis, differential-equation methods, computer tools, and supporting laboratory experiments.",
  },

  python: {
    code: "CS 1260",
    title: "Python Programming",
    description:
      "Problem solving with Python using expressions, control structures, data collections, functions, file I/O, exceptions, and object-oriented programming.",
  },

  linear: {
    code: "MAT 2240",
    title: "Linear Algebra",
    description:
      "Vectors, matrices, systems of linear equations, linear transformations, eigenvalues, and engineering applications.",
  },

  statistics: {
    code: "STA 2260",
    title: "Statistics",
    description:
      "Statistical reasoning, probability-based analysis, estimation, inference, and interpretation of real data.",
  },

  physics: {
    code: "PHY 1510/L · PHY 1520/L",
    title: "Engineering Physics",
    description:
      "Calculus-based mechanics, electricity and magnetism, and experimental laboratory work for engineering applications.",
  },
};

// Course modal elements
const modal = document.getElementById("courseModal");
const modalPanel = modal?.querySelector(
  ".course-modal-content"
);
const modalCode = document.getElementById(
  "courseModalCode"
);
const modalTitle = document.getElementById(
  "courseModalTitle"
);
const modalDescription = document.getElementById(
  "courseModalDescription"
);

let lastFocused = null;

// Open course modal
function openCourseModal(courseKey) {
  const course = courseData[courseKey];

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

  modalCode.textContent = course.code;
  modalTitle.textContent = course.title;
  modalDescription.textContent = course.description;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  modalPanel?.focus();
}

// Close course modal
function closeCourseModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  lastFocused?.focus();
}

// Course buttons
document.querySelectorAll(".tag-button").forEach((button) => {
  button.addEventListener("click", () => {
    openCourseModal(button.dataset.course);
  });
});

// Modal close button
document
  .getElementById("courseModalClose")
  ?.addEventListener("click", closeCourseModal);

// Modal backdrop
document
  .getElementById("courseModalBackdrop")
  ?.addEventListener("click", closeCourseModal);

// Close modal using Escape
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    modal?.classList.contains("open")
  ) {
    closeCourseModal();
  }
});

// Automatically update the footer year
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
