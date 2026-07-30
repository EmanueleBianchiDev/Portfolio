/* ==================================
   PORTFOLIO EMA
   JAVASCRIPT DEFINITIVO 2.2
================================== */

// ===============================
// DARK MODE
// ===============================

const themeButton = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");

    if (themeButton) {
        themeButton.textContent = "☀️ Tema chiaro";
    }
}

if (themeButton) {
    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️ Tema chiaro";
        } else {
            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙 Tema scuro";
        }
    });
}

// ===============================
// ANIMAZIONE SCORRIMENTO
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ===============================
// BLOCCO LINK SOCIAL VUOTI
// ===============================

const socialLinks = document.querySelectorAll(".contact-box a");

socialLinks.forEach((link) => {
    if (link.getAttribute("href") === "#") {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Profilo social in aggiornamento");
        });
    }
});

// ===============================
// PULSANTE TORNA SU
// ===============================

const topButton = document.createElement("button");
topButton.innerHTML = "⬆️";
topButton.className = "top-button";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topButton.classList.add("visible");
    } else {
        topButton.classList.remove("visible");
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// CARICAMENTO IMMAGINI
// ===============================

const images = document.querySelectorAll("img");

images.forEach((img) => {
    img.addEventListener("load", () => {
        img.classList.add("loaded");
    });
});

/* ===============================
   VERSIONE AUTOMATICA
=============================== */

const PORTFOLIO_VERSION = "Portfolio v2.2";
const versionElements = document.querySelectorAll(".versione");

versionElements.forEach((element) => {
    element.textContent = PORTFOLIO_VERSION;
});

/* ===============================
   FOOTER AUTOMATICO
=============================== */

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>© ${new Date().getFullYear()} Emanuele Bianchi</p>
        <p>${PORTFOLIO_VERSION}</p>
    `;
}

// ===============================
// LOG SVILUPPATORE
// ===============================

console.log("Portfolio Emanuele Bianchi v2.2 caricato correttamente");