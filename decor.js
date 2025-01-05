const menuToggle = document.querySelector('#hamburger');
const navbar = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

    // Open the navbar when the hamburger icon is clicked
    menuToggle.addEventListener('click', () => {
        navbar.classList.add('active');
    });

    // Close the navbar when the close button is clicked
    closeBtn.addEventListener('click', () => {
        navbar.classList.remove('active');
    });