
    // Fade out intro animation after 3 seconds
    setTimeout(() => {
        const introOverlay = document.getElementById('intro-overlay');
        if (introOverlay) {
            introOverlay.classList.add('hidden'); // Add the 'hidden' class to trigger fade-out
        }
    }, 3000); // 3000ms = 3 seconds

    // Hide subheadings on scroll
    document.addEventListener('scroll', function () {
        // Select all subheadings inside #about, #Projects, and #contact sections
        const subheadings = document.querySelectorAll("#about h2, #projects h2, #contact h2");

        subheadings.forEach(subheading => {
            if (window.scrollY > 100) {
                subheading.style.opacity = "0"; // Hide subheading
                subheading.style.transition = "opacity 0.5s ease";
            } else {
                subheading.style.opacity = "1"; // Show subheading
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        const menuIcon = document.querySelector('.menu-icon');
        const navLinks = document.querySelector('.nav-links');
    
        menuIcon.addEventListener('click', function () {
            menuIcon.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    
        // Close menu when clicking a link
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                menuIcon.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const lazyElements = document.querySelectorAll(".lazy");
      
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if(entry.isIntersecting) {
              const el = entry.target;
      
              // For images
              if (el.tagName.toLowerCase() === "img" && el.dataset.src) {
                el.src = el.dataset.src;
                el.onload = () => el.classList.add("fade-in");
              }
      
              // For videos
              if (el.tagName.toLowerCase() === "video" && el.dataset.src) {
                el.src = el.dataset.src;
                el.load();
                el.classList.add("fade-in");
              }
      
              observer.unobserve(el);
            }
          });
        }, {
          rootMargin: "0px 0px 100px 0px", // triggers a bit before element is fully in view
        });
      
        lazyElements.forEach(el => {
          // Initially hide elements by removing fade-in class (opacity 0)
          el.classList.remove("fade-in");
          observer.observe(el);
        });
      });
      
      