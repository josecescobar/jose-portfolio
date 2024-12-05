// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    const header = document.querySelector(".main-header");

    // Toggle Hamburger Menu Open/Close
    hamburgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("hidden");
        hamburgerMenu.classList.toggle("open");
    });

    // Close the menu when clicking a link
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.add("hidden");
            hamburgerMenu.classList.remove("open");
        });
    });

    // Change header background on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
