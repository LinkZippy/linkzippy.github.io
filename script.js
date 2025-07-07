document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.querySelector('#about');
    const introSection = document.querySelector('#intro');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('show-background');
            } else {
                aboutSection.classList.remove('show-background');
            }
        });
    }, { threshold: 0.4 }); // Trigger when ~40% of about is visible

    observer.observe(aboutSection);
});