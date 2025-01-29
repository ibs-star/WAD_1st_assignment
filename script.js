
    // Fade out intro animation after 3 seconds
    setTimeout(() => {
        const introOverlay = document.getElementById('intro-overlay');
        if (introOverlay) {
            introOverlay.classList.add('hidden'); // Add the 'hidden' class to trigger fade-out
        }
    }, 3000); // 3000ms = 3 seconds

    // Hide subheadings on scroll
    document.addEventListener('scroll', function () {
        // Select all subheadings inside #about, #skills, and #contact sections
        const subheadings = document.querySelectorAll("#about h2, #skills h2, #contact h2");

        subheadings.forEach(subheading => {
            if (window.scrollY > 100) {
                subheading.style.opacity = "0"; // Hide subheading
                subheading.style.transition = "opacity 0.5s ease";
            } else {
                subheading.style.opacity = "1"; // Show subheading
            }
        });
    });

