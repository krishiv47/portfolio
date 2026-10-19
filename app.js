/* =============================================================
   Krishiv Chawla — portfolio data + rendering
   To update the site, edit the arrays below. No build step.
   ============================================================= */

/* (Start-at-top-on-load is handled by an inline script in <head> so it runs
   before the page renders.) */

/* ---------- PROJECTS (sourced from CV + github.com/krishiv47) ---------- */
const projects = [
  {
    name: "VAYUMitre",
    featured: true,
    status: "In development",
    desc: "ML-powered pollution control for Delhi. Turns live data from 42 CPCB air-quality stations into spray-truck dispatch plans — hourly hotspot zoning, likely-source detection and road-routed truck sizing. XGBoost models forecast PM2.5 1–24 hours ahead per station, validated chronologically against persistence and seasonal-naive baselines. Paired with a lignosulfonate-based dust-suppressant spray developed with JIIT's Biotechnology department, targeting a 35–50% PM2.5 cut per pass. Incubated at BioNEST-JIIT.",
    tags: ["Python", "XGBoost", "scikit-learn", "pandas", "Forecasting"],
    source: "https://github.com/krishiv47/vayumitre-delhi",
  },
  {
    name: "Road Safety Simulation + AI Hazard Detection",
    desc: "Simulates 100 buses on 10 Delhi corridors, streaming live data over WebSockets to a React + Leaflet command dashboard. YOLOv8 + OpenCV detect 8 road hazards, with false alerts cut by confirming each hazard against nearby buses. Incidents auto-escalate to police, ambulance and road authorities — shipped as a single Docker container.",
    tags: ["Python", "FastAPI", "YOLOv8", "OpenCV", "React", "Docker"],
    live: "https://roadsafetysim.vercel.app",
    source: "https://github.com/krishiv47/roadsafety-sim",
  },
  {
    name: "GigGuard",
    desc: "Crash detection & ambulance dispatch for gig riders. Detects crashes from phone motion sensors (2.5G impact + sudden speed drop) and auto-sends an SOS after a 15-second cancel window. A dispatch center with AI injury triage sends the nearest available ambulance from a simulated 12-unit fleet across 8 Delhi hospitals.",
    tags: ["JavaScript", "Leaflet", "Groq API", "Vercel"],
    live: "https://gigworker-blond.vercel.app/",
    source: "https://github.com/krishiv47/gigworker",
  },
];

/* ---------- COMPETITIONS / HACKATHONS ----------
   Shape: { result, event, year, detail, link?, cert? }  */
const competitions = [
  {
    result: "Top 40 / 11,000+",
    event: "Faraway Hackathon",
    year: "2026",
    detail: "Placed in the top 40 out of 11,000+ competing teams.",
  },
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

/* ---------- EXPERIENCE (from CV) ---------- */
const experience = [
  {
    role: "Student Innovator",
    org: "BioNEST-JIIT Incubation Programme (RIDE Society)",
    period: "2026 — Present",
    location: "Noida, India",
    detail: "Selected to incubate VAYUMitre, with lab access, technical mentorship, and grant, IPR and regulatory support.",
  },
  {
    role: "Mentor — AI Agents Workshop",
    org: "TechBlocks 12.1, IEEE Student Branch JIIT",
    period: "Sep 2026",
    location: "Noida, India",
    detail: "Mentored 60+ students over 5 days, from AI agent basics to building their own projects, debugging code and solving 100s of doubts.",
  },
  {
    role: "Co-Founder",
    org: "Elmoak",
    period: "Jul 2026 — Present",
    location: "Delhi, India",
    detail: "Co-founded a digital services startup building client websites, AI agent tools for business automation, and social media management.",
  },
  {
    role: "Volunteer",
    org: "IEEE Student Branch JIIT",
    period: "Jul 2026 — Present",
    location: "Noida, India",
    detail: "Volunteering with JIIT's IEEE Student Branch on technical events and workshops.",
  },
  {
    role: "Volunteer",
    org: "NSS JIIT",
    period: "Jun 2026 — Present",
    location: "Noida, India",
    detail: "National Service Scheme — student volunteering and community-service initiatives at JIIT.",
  },
  {
    role: "Member",
    org: "Parola — The Literary Hub",
    period: "Jun 2026 — Present",
    location: "Noida, India",
    detail: "JIIT's literary society.",
  },
];

/* ---------- ACHIEVEMENT STATS ---------- */
const stats = [
  { num: "Top 40", label: "of 11,000+ teams · Faraway Hackathon" },
  { num: "12+", label: "Hackathons" },
  { num: "110+", label: "LeetCode problems (Python)" },
  { num: "60+", label: "Students mentored" },
];

/* ---------- SKILLS ---------- */
const skills = [
  "Python", "C", "C++", "JavaScript", "TypeScript",
  "XGBoost", "scikit-learn", "pandas", "NumPy", "YOLOv8", "OpenCV", "LLM APIs", "AI Agents",
  "React", "FastAPI", "WebSockets", "Leaflet", "Git", "Docker", "Vercel",
  "Claude Code",
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
  const sourceLink = p.source
    ? `<a href="${esc(p.source)}" target="_blank" rel="noopener">Source ↗</a>`
    : "";
  const liveLink = p.live
    ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">${esc(p.liveLabel || "Live demo")} ↗</a>`
    : `<span class="muted">${esc(p.status || "Demo offline")}</span>`;
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
        ${sourceLink}
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

function experienceItem(e) {
  const type = e.type ? `${esc(e.type)} · ` : "";
  const link = e.link
    ? ` <a class="exp-link" href="${esc(e.link)}" target="_blank" rel="noopener">Visit ↗</a>`
    : "";
  return `
    <li class="exp-item">
      <div class="exp-head">
        <h3 class="exp-role">${esc(e.role)} <span class="exp-org">· ${esc(e.org)}</span></h3>
        <span class="exp-period">${esc(e.period)}</span>
      </div>
      <div class="exp-meta">${type}${esc(e.location)}</div>
      <p class="exp-detail">${esc(e.detail)}${link}</p>
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
  // Belt-and-suspenders: pin to the very top on load/refresh (no animation).
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

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

  const expList = document.getElementById("experience-list");
  if (expList) expList.innerHTML = experience.map(experienceItem).join("");

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
