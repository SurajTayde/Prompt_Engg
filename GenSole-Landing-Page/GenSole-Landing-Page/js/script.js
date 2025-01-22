// JavaScript for GenSole Landing Page

document.addEventListener('DOMContentLoaded', function () {
    // Scroll to sections on nav click
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dynamic button functionality (e.g., "Buy Now" popups)
    const buyButtons = document.querySelectorAll('.btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert('Thank you for your interest! The checkout feature will be available soon.');
        });
    });

    // Form submission alert
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
    });
});
