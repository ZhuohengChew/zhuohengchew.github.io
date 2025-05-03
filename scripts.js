// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    // Scroll to Top Button
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
      window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 500 ? "flex" : "none";
      });
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  
    // Hamburger Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    }
  
    // Nav Link Active State
    const navItems = document.querySelectorAll(".nav-link");
    const currentPath = window.location.pathname;
    navItems.forEach(link => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      }
    });
  
    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", e => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        alert("Form submitted successfully!");
        contactForm.reset();
      });
    }
  
    // Fade-in Animation on Scroll
    const fadeIns = document.querySelectorAll(".fade-in");
    if (fadeIns.length > 0) {
      const observerOptions = { threshold: 0.1 };
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      }, observerOptions);
  
      fadeIns.forEach(el => observer.observe(el));
    }
  });
  
