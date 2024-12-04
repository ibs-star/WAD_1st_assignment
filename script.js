// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the 'fade-in' class
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    // Loop through each element and add the fade-in class
    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
    });
});
// update js code
document.addEventListener('DOMContentLoaded', function () {
    // Wait for 3 seconds, then fade out the intro animation
    setTimeout(() => {
        const introOverlay = document.getElementById('intro-overlay');
        introOverlay.classList.add('hidden'); // Add the 'hidden' class to trigger fade-out
    }, 3000); // 3000ms = 3 seconds
});
