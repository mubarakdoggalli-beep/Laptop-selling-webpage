// ===============================
// TechStore - Main JavaScript
// ===============================

console.log("Welcome to TechStore");

// Welcome message (shown only once)
window.addEventListener("load", () => {
    if (!sessionStorage.getItem("visited")) {
        alert("👋 Welcome to TechStore!\nFind the best laptops at the best prices.");
        sessionStorage.setItem("visited", "true");
    }
});

// Highlight active navigation link
const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#ff9800";
        link.style.fontWeight = "bold";
    }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Footer Year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} TechStore. All Rights Reserved.`;
}

// Simple search placeholder
function searchProduct() {
    alert("Search feature will be available in the next version.");
}