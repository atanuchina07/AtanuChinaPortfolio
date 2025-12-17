// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

let navbar = document.getElementById("hero-nav");

window.addEventListener("scroll", () => {
  if (this.window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});
function openMenu() {
  document.getElementById("mobileMenu").classList.add("active");
}

function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}
