function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 80;

        if (isVisible) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);