// Wie viele Herzen erzeugt werden sollen
const HEART_COUNT = 20;

function createHearts() {
  const heartsContainer = document.getElementById("hearts");
  if (!heartsContainer) return;

  for (let i = 0; i < HEART_COUNT; i++) {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.textContent = "❤";

    // Zufällige Position
    const left = Math.random() * 100; // Prozent
    const top = Math.random() * 100; // Prozent

    // Zufällige Größe
    const size = 18 + Math.random() * 32; // 18–50 px

    // Sanfte, aber unterschiedliche Animation
    const floatDuration = 8 + Math.random() * 6; // 8–14 s
    const driftDuration = 6 + Math.random() * 6; // 6–12 s
    const delay = Math.random() * 8; // 0–8 s

    // Leicht unterschiedliche Transparenz
    const opacity = 0.35 + Math.random() * 0.4; // 0.35–0.75

    heart.style.left = `${left}%`;
    heart.style.top = `${top}%`;
    heart.style.fontSize = `${size}px`;
    heart.style.opacity = opacity.toString();
    heart.style.animationDuration = `${floatDuration}s, ${driftDuration}s`;
    heart.style.animationDelay = `${delay}s, ${delay / 2}s`;

    heartsContainer.appendChild(heart);
  }
}

// PWA: Service Worker registrieren (wenn du später eine service-worker.js anlegst)
function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .catch((err) => console.warn("Service Worker Registrierung fehlgeschlagen:", err));
  }
}

window.addEventListener("load", () => {
  createHearts();
  registerServiceWorker();
});
