AOS.init();
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.niveau');

    // Function to check visibility of elements on scroll
    const revealSections = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 50) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // On load and on scroll, trigger reveal
    window.addEventListener('scroll', revealSections);
    revealSections(); // To reveal sections already in the viewport
});