let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-slide");
let slideInterval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
}

function startCarousel() {
    showSlides();
    slideInterval = setInterval(showSlides, 4000);
}

window.onload = function() {
    startCarousel();
};