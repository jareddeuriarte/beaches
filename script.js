// Get all accordion toggles and content
const toggles = document.querySelectorAll('.accordion-toggle');
const contents = document.querySelectorAll('.accordion-content');

// Add click event listeners to each toggle button
toggles.forEach((toggle, index) => {
    toggle.addEventListener('click', () => {
        // Toggle the active class to show/hide the content
        contents[index].classList.toggle('active');
    });
});
