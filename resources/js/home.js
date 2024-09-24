let slideIndex = [1, 1, 1]; // Separate index for each slideshow (0 - women, 1 - education, 2 - water)
let slideClasses = ["women-slide", "education-slide", "water-slide"]; // Each slideshow class

showSlides(1, 0); // Women Empowerment
showSlides(1, 1); // Education
showSlides(1, 2); // Clean Water

// Function to go to the next/previous slide
function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

// Function to show the slides
function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(slideClasses[no]); // Select slides based on class
    if (n > slides.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex[no] - 1].style.display = "block";  // Display the active slide
}
