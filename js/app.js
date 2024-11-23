// app.js

// Function to toggle the hamburger menu on and off
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("hidden");
    });

    // Optional: Close the menu when clicking a link
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.add("hidden");
        });
    });
});
