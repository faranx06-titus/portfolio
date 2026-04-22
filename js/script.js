window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.style.background = "#000";
  } else {
    header.style.background = "rgba(0,0,0,0.3)";
  }
});
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

const roles = ["ML Developer", "NLP Enthusiast", "Frontend Developer"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  currentRole = roles[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent =
    currentRole.substring(0, j);

  if (!isDeleting && j === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});


/* =========================
   PARALLAX TILT
========================= */
VanillaTilt.init(document.querySelector(".about-img img"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

/* =========================
   MAGNETIC BUTTON
========================= */
const btn = document.querySelector('.btn');

btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

btn.addEventListener('mouseleave', () => {
    btn.style.transform = `translate(0,0)`;
});

/* =========================
   TEXT REVEAL (AI STYLE)
========================= */
const text = document.querySelector('.reveal-text');
text.innerHTML = text.textContent
    .split("")
    .map(letter => `<span>${letter}</span>`)
    .join("");

const spans = document.querySelectorAll('.reveal-text span');

window.addEventListener('scroll', () => {
    spans.forEach((span, i) => {
        setTimeout(() => {
            span.style.opacity = 1;
            span.style.transform = "translateY(0)";
        }, i * 10);
    });
});

/* =========================
   MOUSE GLOW FOLLOW
========================= */
const about = document.querySelector('.about');

about.addEventListener('mousemove', (e) => {
    const rect = about.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    about.style.setProperty('--x', x + 'px');
    about.style.setProperty('--y', y + 'px');

    about.style.setProperty('--glowX', x + 'px');
    about.style.setProperty('--glowY', y + 'px');

    about.style.setProperty('background-position', `${x}px ${y}px`);
});


/* EXPAND ON CLICK */
const boxes = document.querySelectorAll('.service-box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('active');
    });
});

/* 3D TILT EFFECT */
VanillaTilt.init(document.querySelectorAll(".service-box"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});
const projects = {

  clauseforge: {
    title: "ClauseForge AI",
    desc: "AI-powered contract intelligence system using NLP and LLMs.",
    overview: "ClauseForge analyzes complex legal documents, extracts clauses, simplifies them, and highlights potential risks. It transforms dense legal language into structured, understandable insights.",
    features: [
      "⚡ Clause extraction from contracts",
      "🧠 AI-powered summarization",
      "⚠ Risk detection in legal terms",
      "🔍 Semantic search with embeddings"
    ],
    tech: "Python, Transformers, RAG, Streamlit",
    live: "#",
    github: "#"
  },

  interview: {
    title: "AI Interview Analyser",
    desc: "AI system that evaluates interview performance.",
    overview: "This project analyzes interview responses using NLP and ML models to provide feedback on communication, clarity, and confidence.",
    features: [
      "🎤 Speech/Text analysis",
      "📊 Performance scoring",
      "🧠 NLP-based feedback",
      "📈 Improvement suggestions"
    ],
    tech: "Python, NLP, ML models",
    live: "#",
    github: "#"
  },

  recommendation: {
    title: "Recommendation System",
    desc: "Personalized content recommendation engine.",
    overview: "A system that suggests relevant items using collaborative and content-based filtering techniques.",
    features: [
      "📌 User-based filtering",
      "📊 Content-based filtering",
      "⚡ Real-time suggestions",
      "🔍 Similarity scoring"
    ],
    tech: "Python, Pandas, Scikit-learn",
    live: "#",
    github: "#"
  },

  nlp: {
    title: "NLP Toolkit",
    desc: "Multi-functional NLP processing system.",
    overview: "A toolkit that performs multiple NLP tasks like sentiment analysis, summarization, and keyword extraction.",
    features: [
      "😊 Sentiment analysis",
      "📝 Text summarization",
      "🔑 Keyword extraction",
      "⚙ Text preprocessing"
    ],
    tech: "Python, NLTK, Transformers",
    live: "#",
    github: "#"
  },

  data: {
    title: "Data Analysis Project",
    desc: "Data-driven insights using analytics.",
    overview: "A project focused on extracting meaningful insights from datasets using statistical and visualization techniques.",
    features: [
      "📊 Data cleaning",
      "📈 Visualization",
      "📉 Trend analysis",
      "📌 Insight generation"
    ],
    tech: "Python, Pandas, Matplotlib",
    live: "#",
    github: "#"
  },

  misc: {
    title: "Miscellaneous Projects",
    desc: "Collection of smaller experimental builds.",
    overview: "Various mini-projects exploring different domains including web, AI, and automation.",
    features: [
      "⚡ Quick prototypes",
      "🌐 Web experiments",
      "🤖 AI mini tools",
      "🧪 Learning projects"
    ],
    tech: "Mixed Tech Stack",
    live: "#",
    github: "#"
  }

};
const modal = document.getElementById("projectModal");
const closeBtn = document.querySelector(".close-btn");

const title = document.getElementById("modal-title");
const desc = document.getElementById("modal-desc");
const hero = document.getElementById("modal-hero-text");
const overview = document.getElementById("modal-overview");
const features = document.getElementById("modal-features");
const tech = document.getElementById("modal-tech");

const live = document.getElementById("live-link");
const github = document.getElementById("github-link");

const reviewButtons = document.querySelectorAll(".review-btn");

reviewButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const key = btn.dataset.project;
        const project = projects[key];

        modal.classList.add("active");
        document.body.style.overflow = "hidden";

        title.innerText = project.title;
        desc.innerText = project.desc;
        hero.innerText = project.desc; // or custom line
        overview.innerText = project.overview;

        features.innerHTML = project.features
            .map(f => `<li>${f}</li>`)
            .join("");

        tech.innerText = project.tech;

        live.href = project.live;
        github.href = project.github;
    });
});

/* CLOSE */
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});
const openAbout = document.getElementById("openAbout");
const aboutModal = document.getElementById("aboutModal");
const closeAbout = document.querySelector(".close-about");

/* OPEN */
openAbout.addEventListener("click", (e) => {
    e.preventDefault();
    aboutModal.classList.add("active");
});

/* CLOSE BUTTON */
closeAbout.addEventListener("click", () => {
    aboutModal.classList.remove("active");
});

/* CLICK OUTSIDE */
window.addEventListener("click", (e) => {
    if (e.target === aboutModal) {
        aboutModal.classList.remove("active");
    }
});