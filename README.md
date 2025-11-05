<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>David Boyadjian – Résumé-Style Portfolio</title>
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
    a{color:var(--accent)}
    header{
      position:fixed;top:0;left:0;right:0;
      background:rgba(13,17,23,.85);
      backdrop-filter:blur(6px);
      border-bottom:1px solid var(--border);
      z-index:10;
    }
    nav{
      max-width:900px;margin:auto;
      display:flex;align-items:center;justify-content:space-between;
      padding:1rem 2rem;
    }
    .logo{font-weight:700;font-size:1.1rem}
    nav ul{list-style:none;display:flex;gap:1.5rem}
    nav li{position:relative}
    nav li::after{
      content:'';position:absolute;left:0;bottom:-4px;
      height:2px;width:0;background:var(--accent);transition:.3s;
    }
    nav li.active::after{width:100%}
    section{padding:4rem 2rem;max-width:900px;margin:auto}
    h2{margin-bottom:1.2rem;font-size:1.7rem}
    .section-title{border-bottom:1px solid var(--border);padding-bottom:.5rem;margin-bottom:1.5rem}
    .job{margin-bottom:2rem}
    .job-head{display:flex;justify-content:space-between;flex-wrap:wrap;margin-bottom:.3rem}
    .job-title{font-weight:600}
    .job-date{color:var(--sub)}
    ul{margin-left:1.2rem}
    .btn{
      display:inline-block;margin-top:.8rem;
      background:var(--accent);color:#fff;
      padding:.55rem 1.3rem;border-radius:6px;
      transition:.25s;
    }
    .btn:hover{filter:brightness(1.15);transform:translateY(-2px)}
    footer{text-align:center;padding:2rem;font-size:.9rem;color:var(--sub)}
    /* reveal on scroll */
    .reveal{opacity:0;transform:translateY(30px);transition:.6s}
    .reveal.visible{opacity:1;transform:none}
  </style>
</head>
<body>

<header>
  <nav>
    <div class="logo">David Boyadjian</div>
    <ul>
      <li><a href="#education">Education</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#leadership">Leadership</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<section id="education" class="reveal">
  <h2 class="section-title">Education</h2>
  <p><strong>California State Polytechnic University, Pomona</strong> — <em>Expected May 2029</em><br>
  Bachelor of Science: <strong>Computer Engineering</strong><br>
  Minors: <strong>Data Science, Statistics</strong></p>
</section>

<section id="experience" class="reveal">
  <h2 class="section-title">Experience</h2>

  <div class="job">
    <div class="job-head">
      <span class="job-title">Student Assistant – Events & Conferences</span>
      <span class="job-date">Aug 2025 – Present</span>
    </div>
    <p><em>College of Engineering, Cal Poly Pomona</em></p>
    <ul>
      <li>Organize 3–5 engineering events monthly (career fairs, club expos, job fairs).</li>
      <li>Clean & validate 100+ attendance lists; manage folder-based Excel databases.</li>
      <li>Create Eventbrite flows & Canva assets to boost outreach and engagement.</li>
      <li>Coordinate vendors, faculty, and sponsors to ensure flawless execution.</li>
    </ul>
  </div>

  <div class="job">
    <div class="job-head">
      <span class="job-title">Data Analyst Intern</span>
      <span class="job-date">Jun 2025 – Aug 2025</span>
    </div>
    <p><em>Arakelian Enterprises / Athens Services, Pacoima</em></p>
    <ul>
      <li>Validated & cleaned SMSS data for business-critical reports.</li>
      <li>Supported Salesforce Field-Service mobile-app rollout.</li>
      <li>Built low-code AppSheet automations; prototyped Tableau dashboards.</li>
      <li>Collaborated on AI-powered DB + custom UI with Flynet Studios.</li>
    </ul>
  </div>
</section>

<section id="projects" class="reveal">
  <h2 class="section-title">Projects</h2>
  <div class="job">
    <p><strong>Personal Portfolio Website</strong> (this site)</p>
    <ul>
      <li>Dark-mode, responsive, single-file GitHub Pages deployment.</li>
      <li>Smooth-scroll navigation, on-scroll reveal animations, print-ready résumé.</li>
      <li>Stack: vanilla HTML /
