const slides = document.querySelectorAll('.slides li');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

// You can change the slide every 3 seconds (3000 milliseconds)
setInterval(nextSlide, 3000);

// Initialize the slideshow by showing the first slide
showSlide(0);

$(document).ready(function () {
 
    $('ul.navbar-nav > li')
            .click(function (e) {
        $('ul.navbar-nav > li')
            .removeClass('active');
        $(this).addClass('active');
    });
});