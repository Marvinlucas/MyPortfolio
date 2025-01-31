document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Check if dark mode is already enabled in localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Save the dark mode state in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const hamburgerToggle = document.getElementById("hamburgerToggle");
    const navbarNav = document.querySelector(".navbar__nav");

    hamburgerToggle.addEventListener("click", () => {
        navbarNav.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Add a slight delay to trigger the transition after initial load
    setTimeout(() => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.add("active"); // Start the transition for all elements
    }, 100); // Small delay for smooth effect
});


    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
  
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });


      let lastScrollTop = 0;
      const navbar = document.querySelector('.navbar');
      
      window.addEventListener('scroll', function () {
          let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      
          // If scrolling up and past a certain point, show the navbar
          if (currentScroll < lastScrollTop) {
              navbar.style.top = '0'; // Show the navbar
          } else {
              navbar.style.top = '-60px'; // Hide the navbar (adjust value based on navbar height)
          }
      
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll
      });
      