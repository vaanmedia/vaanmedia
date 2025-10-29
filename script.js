// Smooth fade-in animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const reveal = () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});
