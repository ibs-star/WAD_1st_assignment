// Wait for the DOM content to be loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the 'fade-in' class
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    // Loop through each element and add the fade-in class
    fadeInElements.forEach(element => {
        element.classList.add('fade-in');
    });
});
