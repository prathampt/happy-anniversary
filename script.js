window.addEventListener("load", () => {
    Swal.fire({
      title: "Do you want to play music in the background?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const audio = document.querySelector(".song");
        audio.play().catch(error => console.error("Autoplay blocked:", error)); // Ensure it plays
        startSlideshow();
      } else {
        startSlideshow();
      }
    });
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
