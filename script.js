let slideIndex = 0; // keep track of which image is currently displayed in the slideshow
showSlides(); // call the showSlides() function

function showSlides() {
    let slides = document.getElementsByClassName("slide"); // slides holds a collection of HTML elements. behaves like an array via indices

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";       // hide all slides by default
    }

    slides[slideIndex].style.display = "block";

    slideIndex++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;                     // start slideshow over from the beginning
    }

    setTimeout(showSlides, 5000); // change image every 5 seconds
}
