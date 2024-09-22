    // Ensure the script runs after the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', () => {
        let currentImageIndex = 0;
        const totalImages = document.querySelectorAll('.carousel-wrapper img').length;
        const carouselWrapper = document.querySelector('.carousel-wrapper');
  
        // Function to slide images smoothly
        function slideImages() {
          const translateXValue = -(100 / totalImages) * currentImageIndex; // Adjust the translateX calculation
          carouselWrapper.style.transform = `translateX(${translateXValue}%)`; // Move the carousel
          currentImageIndex = (currentImageIndex + 1) % totalImages; // Increment index and loop back to 0
        }
  
        // Set interval to slide the images every 4.3 seconds
        setInterval(slideImages, 4300);
  
        // Trigger the first image slide
        slideImages();
      });