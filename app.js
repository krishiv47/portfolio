/* =============================================================
   Krishiv Chawla — portfolio data + rendering
   To update the site, edit the arrays below. No build step.
   ============================================================= */

/* Always open at the top on load/refresh — stop the browser from
   restoring the previous scroll position. (Nav links still jump to
   their section because that's a click, and #hash deep links still work.) */
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

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
    liveLabel: "Website",
    source: "https://github.com/krishiv47/BrahmaMind",
  },
];

/* ---------- COMPETITIONS / HACKATHONS ----------
   Shape: { result, event, year, detail, link? }
   (Sourced from LinkedIn — these are participation/appreciation certs.)  */
const competitions = [
  {
    result: "Participant",
    event: "DRON-O-WAR 1.0 — JIIT",
    year: "May 2026",
    detail: "Built an Air Midline Interception Detection Drone for the Drone Design & Innovation track at JIIT, Noida (2–3 May 2026).",
    cert: "assets/cert-dronowar.jpg",
  },
  {
    result: "Participant",
    event: "Devcation Delhi 2026",
    year: "Apr 2026",
    detail: "Hackathon by Google Developer Groups on Campus — IGDTUW × IIT Delhi.",
    cert: "assets/cert-devcation.jpg",
  },
  {
    result: "Participant",
    event: "Climate Data Hackathon — Delhi Edition",
    year: "Feb 2026",
    detail: "Data-driven entry for climate & environmental challenges, hosted by RIDE at JIIT. “Sometimes you win, sometimes you learn.”",
    cert: "assets/cert-climate.jpg",
  },
  {
    result: "Certificate of Appreciation",
    event: "TECHBLOCKS 11.1 — IEEE SB, JIIT",
    year: "2025–26",
    detail: "Recognised in the Agentic AI domain at the IEEE Student Branch's flagship technical program.",
    cert: "assets/cert-techblocks.jpg",
  },
];

/* ---------- ACHIEVEMENT STATS (auto-derived where possible) ---------- */
const stats = [
  { num: projects.length, label: "Projects shipped" },
  { num: competitions.length, label: "Competitions & hackathons" },
  { num: projects.filter((p) => p.live).length, label: "Live deployments" },
  { num: "5", label: "Languages" },
];

/* ---------- SKILLS ---------- */
const skills = [
  "Python", "C++", "Java", "C", "SQL",
  "Agentic AI", "Simulation", "Computer Vision",
  "Embedded & Hardware", "AutoCAD", "Graph algorithms", "Leaflet / Maps",
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
    ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">${esc(p.liveLabel || "Live demo")} ↗</a>`
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
  const cert = c.cert
    ? `<a class="t-cert" href="${esc(c.cert)}" target="_blank" rel="noopener"
          aria-label="View ${esc(c.event)} certificate">
         <img src="${esc(c.cert)}" alt="${esc(c.event)} certificate" loading="lazy" />
         <span class="t-cert__hint">View certificate ↗</span>
       </a>`
    : "";
  return `
    <li class="t-item${cls}">
      <div class="t-meta">
        <span class="t-result">${esc(c.result)}</span>
        <span>${esc(c.year)}</span>
      </div>
      <div class="t-name">${esc(c.event)}</div>
      <p class="t-detail">${detail}</p>
      ${cert}
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
  // On a plain load/refresh (no #section in the URL), start at the very top.
  if (!location.hash) window.scrollTo(0, 0);

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
