/* =============================================================
   Krishiv Chawla — portfolio data + rendering
   To update the site, edit the arrays below. No build step.
   ============================================================= */

/* ---------- PROJECTS (sourced from github.com/krishiv47) ---------- */
const projects = [
  {
    name: "EcoShield Delhi",
    featured: true,
    desc: "Agentic AI pollution-control simulation: a fleet of water-sprinkler tankers patrols the real Delhi Metro network, coordinated by a modified multi-objective Dijkstra router. Ships with a live operations dashboard and a driver console.",
    tags: ["Agentic AI", "Simulation", "Python", "Dijkstra", "Leaflet"],
    live: "https://krishiv47.github.io/ecoshield-delhi-ai/",
    source: "https://github.com/krishiv47/ecoshield-delhi-ai",
  },
  {
    name: "RoadSafety Sim",
    desc: "Real-time road-safety simulation with AI hazard detection — a full stack spanning a computer-vision pipeline, a TypeScript front end, and a containerised Python backend.",
    tags: ["AI", "Computer Vision", "TypeScript", "Python", "Docker"],
    source: "https://github.com/krishiv47/roadsafety-sim",
  },
  {
    name: "RoadSafety AI",
    desc: "An earlier road-safety AI build — a Python detection pipeline behind an HTML interface, packaged for cloud deployment.",
    tags: ["AI", "Python", "HTML"],
    source: "https://github.com/krishiv47/roadsafety_ai",
  },
  {
    name: "GovGig",
    desc: "A JavaScript web platform exploring government & gig-work workflows.",
    tags: ["JavaScript", "Web App"],
    source: "https://github.com/krishiv47/govgig",
  },
  {
    name: "BrahmaMind",
    desc: "A small research space — “AI and beyond AI” — published as a lightweight live site.",
    tags: ["Research", "AI"],
    live: "https://krishiv47.github.io/BrahmaMind/",
    source: "https://github.com/krishiv47/BrahmaMind",
  },
];

/* ---------- COMPETITIONS ----------
   Replace the placeholder entries below with your real ones.
   Shape: { result, event, year, detail, link? }
   Set placeholder:true to render the dashed "add yours" style.   */
const competitions = [
  {
    placeholder: true,
    result: "Placement",
    event: "Hackathon / competition name",
    year: "2025",
    detail: "What you built and the outcome — replace this with a real entry.",
  },
  {
    placeholder: true,
    result: "Award",
    event: "Hackathon / competition name",
    year: "2025",
    detail: "What you built and the outcome — replace this with a real entry.",
  },
  {
    placeholder: true,
    result: "Finalist",
    event: "Hackathon / competition name",
    year: "2024",
    detail: "What you built and the outcome — replace this with a real entry.",
  },
];

/* ---------- ACHIEVEMENT STATS (auto-derived where possible) ---------- */
const stats = [
  { num: projects.length, label: "Projects shipped" },
  { num: projects.filter((p) => p.live).length, label: "Live deployments" },
  { num: "5+", label: "Languages used" },
  { num: "AI", label: "Core focus" },
];

/* ---------- SKILLS ---------- */
const skills = [
  "Python", "JavaScript", "TypeScript", "HTML / CSS",
  "Agentic AI", "Simulation", "Computer Vision",
  "Graph algorithms", "Leaflet / Maps", "Docker",
];

/* ============================================================= */
/* Rendering                                                     */
/* ============================================================= */
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
  );

function projectCard(p) {
  const chips = p.tags.map((t) => `<li>${esc(t)}</li>`).join("");
  const liveBadge = p.live
    ? `<span class="card__live"><span class="dot"></span>Live</span>`
    : "";
  const featBadge = p.featured ? `<span class="card__badge">Flagship</span>` : "";
  const liveLink = p.live
    ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">Live demo ↗</a>`
    : `<span class="muted">Demo offline</span>`;
  return `
    <article class="card${p.featured ? " card--featured" : ""}">
      <div class="card__top">
        ${featBadge}
        ${liveBadge}
      </div>
      <h3 class="card__name">${esc(p.name)}</h3>
      <p class="card__desc">${esc(p.desc)}</p>
      <ul class="chips">${chips}</ul>
      <div class="card__links">
        <a href="${esc(p.source)}" target="_blank" rel="noopener">Source ↗</a>
        ${liveLink}
      </div>
    </article>`;
}

function competitionItem(c) {
  const cls = c.placeholder ? " t-item--placeholder" : "";
  const detail = c.link
    ? `<a href="${esc(c.link)}" target="_blank" rel="noopener">${esc(c.detail)} ↗</a>`
    : esc(c.detail);
  return `
    <li class="t-item${cls}">
      <div class="t-meta">
        <span class="t-result">${esc(c.result)}</span>
        <span>${esc(c.year)}</span>
      </div>
      <div class="t-name">${esc(c.event)}</div>
      <p class="t-detail">${detail}</p>
    </li>`;
}

function statCard(s) {
  return `
    <div class="stat">
      <div class="stat__num">${esc(s.num)}</div>
      <div class="stat__label">${esc(s.label)}</div>
    </div>`;
}

function mount() {
  const grid = document.getElementById("projects-grid");
  if (grid) grid.innerHTML = projects.map(projectCard).join("");

  const comp = document.getElementById("competitions-list");
  if (comp) {
    comp.innerHTML = competitions.map(competitionItem).join("");
    if (competitions.some((c) => c.placeholder)) {
      comp.insertAdjacentHTML(
        "beforeend",
        `<p class="t-note">Real competition entries coming soon — these are placeholders.</p>`
      );
    }
  }

  const statsRow = document.getElementById("stats-row");
  if (statsRow) statsRow.innerHTML = stats.map(statCard).join("");

  const skillsList = document.getElementById("skills-list");
  if (skillsList) skillsList.innerHTML = skills.map((s) => `<li>${esc(s)}</li>`).join("");

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Reveal-on-scroll
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((el) => io.observe(el));
}

document.addEventListener("DOMContentLoaded", mount);
