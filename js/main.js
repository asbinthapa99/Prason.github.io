// Sticky Navbar
let navbar = document.querySelector("#navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Toggle Nav on Mobile
let bars = document.querySelector("#bars");
let nav = document.querySelector("#nav");
let nav_links = document.querySelectorAll("#nav a");

bars.addEventListener("click", () => {
    nav.classList.toggle("show");
});

nav_links.forEach((links) => {
    links.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});

// Typed.js Initialization
var typed = new Typed("#element", {
    strings: ["Website Designer", "Web Developer", "Frontend Developer"],
    typeSpeed: 50,
    loop: true,
});

// Swiper Initialization
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
