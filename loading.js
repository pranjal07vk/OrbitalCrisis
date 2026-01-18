const progress = document.getElementById("progress");
const loader = document.getElementById("loader");
const rocket = document.getElementById("rocket");

let load = 0;

const interval = setInterval(() => {
  load += 2;
  progress.style.width = load + "%";

  if (load >= 100) {
    clearInterval(interval);

    // Fade out text + bar
    loader.classList.add("fade-out");

    // Rocket moves up & fades
    rocket.classList.add("rocket-fly");

    // Optional: remove loader after animation
    setTimeout(() => {
      loader.style.display = "none";
      // 👉 Here you can show your level page
    }, 1200);
  }
}, 30);
