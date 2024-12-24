function toggleSocialMenu(event) {
    event.stopPropagation();
    const socialCircle = document.querySelector('.social-circle');
    socialCircle.classList.toggle('active');
}

document.body.addEventListener('click', () => {
    const socialCircle = document.querySelector('.social-circle');
    socialCircle.classList.remove('active');
});


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY; // Прокрученная часть
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Общая высота страницы минус высота окна
    const progress = (scrollTop / docHeight) * 100; // Процент прокрутки
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progress}%`; // Устанавливаем ширину панели
});

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');

    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Социальное меню
    const socialCircle = document.querySelector('.social-circle');
    const socialMenu = document.querySelector('.social-circle ul');

    if (socialCircle && socialMenu) {
        // Открываем или закрываем меню при клике на кружок
        socialCircle.addEventListener('click', (event) => {
            event.stopPropagation(); // Останавливаем событие, чтобы меню не закрывалось
            socialMenu.classList.toggle('active'); // Переключаем состояние меню
        });

        // Закрываем меню при клике вне его
        document.body.addEventListener('click', () => {
            socialMenu.classList.remove('active');
        });
    }


    // Прокрутка (для прогресс-бара)
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY; // Прокрученная часть
            const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Общая высота страницы
            const progress = (scrollTop / docHeight) * 100; // Процент прокрутки
            progressBar.style.width = `${progress}%`;
        });
    }

    const floatingBackground = document.querySelector('.floating-background');
    const iconPath = './static/icons/'; // Относительный путь к иконкам
    const icons = [
        'information-circle-svgrepo-com.svg',
        'internet-svgrepo-com.svg',
        'lightning-svgrepo-com.svg',
        'plane-svgrepo-com.svg',
        'processor-svgrepo-com.svg',
    ];

    const getRandomFloat = (min, max) => Math.random() * (max - min) + min;

    const createIcon = () => {
        const icon = document.createElement('img');
        icon.src = iconPath + icons[Math.floor(Math.random() * icons.length)];
        icon.classList.add('floating-icon');

        // Задаем случайное положение и размер
        icon.style.left = `${getRandomFloat(0, 100)}%`; // Случайное положение по горизонтали
        icon.style.width = `${getRandomFloat(20, 50)}px`; // Случайный размер
        icon.style.animationDuration = `${getRandomFloat(30, 120)}s`; // Случайная скорость падения

        floatingBackground.appendChild(icon);

        // Удаляем иконку после завершения анимации
        icon.addEventListener('animationend', () => {
            icon.remove();
        });
    };

    // Создание иконок с интервалом
    setInterval(() => {
        if (floatingBackground.childElementCount < 20) { // Ограничиваем количество иконок
            createIcon();
        }
    }, 1000); // Интервал создания

    const themeToggleBtn = document.getElementById('theme-toggle');

    // Назначаем обработчик клика
    themeToggleBtn.addEventListener('click', () => {
        // Переключаем класс dark-theme на body
        document.body.classList.toggle('dark-theme');
    });

    
});


