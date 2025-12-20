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

const scroll_up = document.getElementById("scroll-up");

// Show button after scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scroll_up.classList.add("show");
  } else {
    scroll_up.classList.remove("show");
  }
});

// Scroll to top on click
scroll_up.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver( //This observer watches elements and tells us when they enter the viewport
  (entries) => {
    ///list of elements being observed right now
    entries.forEach((entry) => {
      //Loop through each observed element
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target); // stops animation from repeating.
      }
    });
  },
  {
    threshold: 0.15, // 15% visible triggers animation
  }
);
reveals.forEach((section) => {
  revealObserver.observe(section);
});
