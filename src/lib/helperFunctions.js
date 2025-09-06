export const scrollToSection = (id) => {
  // Try to find the element immediately
  let element = document.getElementById(id);
  
  // If not found immediately, try again after a short delay
  if (!element) {
    setTimeout(() => {
      element = document.getElementById(id);
      if (element) {
        performScroll(element);
      } else {
        // Try alternative method
        tryAlternativeScroll(id);
      }
    }, 100);
  } else {
    performScroll(element);
  }
  
  function performScroll(element) {
    const yOffset = -70;
    const y = element.offsetTop + yOffset;
    
    // Try smooth scroll first, fallback to instant scroll
    try {
      window.scrollTo({ top: y, behavior: "smooth" });
    } catch (error) {
      window.scrollTo(0, y);
    }
  }
  
  function tryAlternativeScroll(id) {
    // Try using querySelector as fallback
    const altElement = document.querySelector(`[id="${id}"]`);
    if (altElement) {
      performScroll(altElement);
    }
  }
};

