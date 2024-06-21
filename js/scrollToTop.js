const scrollButton = document.querySelector('#scrollToTopBtn');

// Слушаем событие скоролла на странице
window.addEventListener('scroll', function() {
    // Для проверки
    // console.log('Scroll!!!')

    // Если пользователь проскролил страницу по высоте больше чем высота экрана
    if (window.pageYOffset > window.innerHeight) {
        // Тогда к кнопке добавляем класс top-link-visible что бы отобразить ее
        scrollButton.classList.add('top-link--visible');
    } else {
        scrollButton.classList.remove('top-link--visible');
    }
})