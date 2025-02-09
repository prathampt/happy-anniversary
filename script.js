document.addEventListener("DOMContentLoaded", function () {

    const userConsent = confirm("Would you like to play the music and start the animation?");
    
    if (userConsent) {
        startSlideshow();

        const audio = document.getElementById("background-music");
        audio.play().catch(error => {
            console.log("Autoplay failed:", error);
        });
    } else {
        alert("The animation will not start without permission.");
        location.reload();
    }
});

function startSlideshow() {
    let slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change image every 3 seconds
}
