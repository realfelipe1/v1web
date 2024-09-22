const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle the clicked button
        button.classList.toggle('active');
        button.nextElementSibling.classList.toggle('active');
    });
});
