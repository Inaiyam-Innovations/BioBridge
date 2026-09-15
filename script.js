const dnaScene = document.getElementById("dnaScene");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (dnaScene && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;
    dnaScene.style.transform = `perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 10}deg)`;
  });

  document.addEventListener("mouseleave", () => {
    dnaScene.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  });
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("mobile-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuButton.textContent = isOpen ? "×" : "☰";
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰";
    });
  });
}

const sections = document.querySelectorAll("main section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 150) current = section.id;
  });
  links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
});
