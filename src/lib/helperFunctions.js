export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  
  if (!element) {
    return;
  }
  
  const yOffset = -70;
  const y = element.offsetTop + yOffset;
  
  window.scrollTo({ top: y, behavior: "smooth" });
};

