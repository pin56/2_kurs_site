function toggleMenu() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('nav ul');
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function toggleSocialMenu(event) {
    event.stopPropagation();
    const socialCircle = document.querySelector('.social-circle');
    socialCircle.classList.toggle('active');
}

document.body.addEventListener('click', () => {
    const socialCircle = document.querySelector('.social-circle');
    socialCircle.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
        const img = section.querySelector(".section-image img");

        if (img) {
            img.onload = () => {
                if (img.naturalWidth === img.naturalHeight) {
                    section.classList.add("square");
                }
            };
            // Обработка случаев, когда изображение уже загружено
            if (img.complete) {
                if (img.naturalWidth === img.naturalHeight) {
                    section.classList.add("square");
                }
            }
        }
    });
});
