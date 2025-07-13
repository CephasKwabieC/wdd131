// footer data script
document.getElementById("currentyear").textContent = new Date().getFullYear();
// set last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


// Hamburger menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    const isVisible = navMenu.classList.toggle("open");
    menuToggle.textContent = isVisible ? "✖" : "☰";
});
