<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>David Boyadjian – Computer Engineering Student</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    :root{
      --bg:#0d1117;
      --card:#161b22;
      --accent:#58a6ff;
      --text:#c9d1d9;
      --sub:#8b949e;
      --border:#30363d;
      font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
    }
    *{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{background:var(--bg);color:var(--text);line-height:1.6}
    a{color:var(--accent);text-decoration:none}
    img{max-width:100%;display:block}
    header{
      position:fixed;top:0;left:0;right:0;
      background:rgba(13,17,23,.85);
      backdrop-filter:blur(6px);
      border-bottom:1px solid var(--border);
      z-index:10;
    }
    nav{
      max-width:1100px;margin:auto;
      display:flex;align-items:center;justify-content:space-between;
      padding:1rem 2rem;
    }
    .logo{font-weight:700;font-size:1.1rem}
    nav ul{
      list-style:none;display:flex;gap:1.5rem;
    }
    nav li{position:relative}
    nav li::after{
      content:'';position:absolute;left:0;bottom:-4px;
      height:2px;width:0;background:var(--accent);
      transition:.3s;
    }
    nav li.active::after{width:100%}
    section{padding:5rem 2rem;max-width:1100px;margin:auto}
    .hero{display:flex;flex-direction:column;align-items:center;text-align:center;gap:1rem}
    .hero h1{font-size:2.5rem}
    .hero p{max-width:600px;color:var(--sub)}
    .btn{
      display:inline-block;margin-top:1rem;
      background:var(--accent);color:#fff;
      padding:.6rem 1.4rem;border-radius:6px;
      transition:.3s;
    }
    .btn:hover{filter:brightness(1.15)}
    .cards{
      display:grid;gap:1.5rem;grid-template-columns:repeat(auto-fit,minmax(280px,1fr))
    }
    .card{
      background:var(--card);border:1px solid var(--border);
      border-radius:8px;padding:1.5rem;
      opacity:0;transform:translateY(30px);
      transition:.5s;
    }
    .card.show{opacity:1;transform:none}
    .timeline{position:relative;padding-left:1.5rem}
    .timeline::before{
      content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--border)
    }
    .timeline-item{margin-bottom:2rem;position:relative}
    .timeline-item::before{
      content:'';position:absolute;left:-1.5rem;top:.4rem;
      width:12px;height:12px;border-radius:50%;background:var(--accent)
    }
    .print-only{display:none}
    @media print{
      header,footer,.btn,.no-print{display:none}
      .print-only{display:block}
      body{background:#fff;color:#000}
    }
    footer{text-align:center;padding:2rem;font-size:.9rem;color:var(--sub)}
  </style>
</head>
<body>

<header>
  <nav>
    <div class="logo">David Boyadjian</div>
    <ul>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#resume">Résumé</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<section id="about" class="hero">
  <h1>Hi, I'm David<span style="color:var(--accent)">.</span></h1>
  <p>
    I moved from Armenia to the U.S. in 2023 to chase bigger dreams.
    Today I'm a Computer-Engineering freshman at Cal Poly Pomona,
    addicted to building things that scale and the people who make them possible.
    I thrive on trustworthy relationships, sky-high goals, and every small step in between.
  </p>
  <a class="btn" href="#contact">Let's connect</a>
</section>

<section id="experience">
  <h2>Experience</h2>
  <div class="timeline">
    <div class="timeline-item">
      <h3>Student Assistant – Events & Conferences</h3>
      <p class="sub">Cal Poly Pomona College of Engineering &nbsp;|&nbsp; Aug 2025 – Present</p>
      <ul>
        <li>Organize 3-5 engineering events monthly (career fairs, club expos, job fairs).</li>
        <li>Clean & validate 100+ attendance lists; build Eventbrite flows & Canva creatives.</li>
        <li>Coordinate vendors, faculty, and sponsors to deliver seamless experiences.</li>
      </ul>
    </div>
    <div class="timeline-item">
      <h3>Data Analyst Intern</h3>
      <p class="sub">Arakelian Enterprises / Athens Services &nbsp;|&nbsp; Jun 2025 – Aug 2025</p>
      <ul>
        <li>Validated SMSS databases; supported Salesforce Field-Service app rollout.</li>
        <li>Built low-code AppSheet automations; prototyped Tableau dashboards.</li>
        <li>Collaborated on AI-powered DB + custom UI with Flynet Studios.</li>
      </ul>
    </div>
  </div>
</section>

<section id="projects">
  <h2>Projects</h2>
  <div class="cards">
    <div class="card">
      <h3>Personal Portfolio Website</h3>
      <p>Responsive, dark-mode-first site served via GitHub Pages. Vanilla HTML/CSS/JS with scroll-spy nav, on-scroll reveals, and print-ready résumé section. You're looking at it.</p>
      <p><strong>Stack:</strong> HTML, CSS, JavaScript, GitHub Pages</p>
    </div>
  </div>
</section>

<section id="resume" class="print-only">
  <!-- Printable one-page résumé -->
  <h1>David Boyadjian</h1>
  <p>(818) 751-3885 | dboyadjian@cpp.edu | linkedin.com/in/david-boyadjian</p>
  <h2>Education</h2>
  <p><strong>California State Polytechnic University, Pomona</strong> — B.S. Computer Engineering (Exp. May 2029)<br>
  Minors: Data Science, Statistics | GPA: [add when available]</p>

  <h2>Experience</h2>
  <p><strong>Student Assistant – Events & Conferences</strong>, Cal Poly Pomona CoE — Aug 2025-Present<br>
  Organize 3-5 monthly engineering events; validate 100+ attendance lists; design Eventbrite & Canva assets; coordinate vendors & sponsors.</p>

  <p><strong>Data Analyst Intern</strong>, Arakelian Enterprises/Athens Services — Jun 2025-Aug 2025<br>
  Cleaned SMSS data; supported Salesforce Field-Service rollout; built AppSheet automations; prototyped Tableau dashboards; helped create AI DB + custom UI.</p>

  <h2>Projects</h2>
  <p><strong>Personal Portfolio Website</strong> — GitHub Pages, vanilla stack, dark-mode, print-ready.</p>

  <h2>Skills</h2>
  <p><strong>Languages:</strong> Python, SQL, HTML/CSS/JS<br>
  <strong>Tools:</strong> Excel, Tableau, AppSheet, GitHub, Canva, Eventbrite<br>
  <strong>Languages spoken:</strong> Armenian, English, Russian</p>
</section>

<section id="contact">
  <h2>Contact</h2>
  <p>Want to build something together? Reach me anywhere below.</p>
  <div class="cards">
    <a class="card" href="mailto:dboyadjian@cpp.edu">Email</a>
    <a class="card" href="https://linkedin.com/in/david-boyadjian" target="_blank">LinkedIn</a>
    <a class="card" href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank">GitHub</a>
  </div>
</section>

<footer>
  © 2025 David Boyadjian – built & hosted with ❤️ on GitHub Pages.
</footer>

<script>
// Highlight active nav link on scroll
const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll('nav ul li');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(li=>li.classList.remove('active'));
      const active=document.querySelector(`nav a[href="#${entry.target.id}"]`).parentElement;
      active.classList.add('active');
    }
  });
},{threshold:.6});
sections.forEach(sec=>observer.observe(sec));

// Reveal cards on scroll
const cards=document.querySelectorAll('.card');
const cardObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting)entry.target.classList.add('show');
  });
},{threshold:.2});
cards.forEach(card=>cardObserver.observe(card));
</script>
</body>
</html>
