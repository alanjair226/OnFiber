// src/mobile-menu.js

export default function initMobileMenu() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
  
    mobileMenuButton.addEventListener("click", () => {

      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("opacity-100");
    });
  }
  
  // Call the init function after DOMContentLoaded event (optional)
  document.addEventListener("DOMContentLoaded", initMobileMenu);
