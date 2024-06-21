/* Мобильная навигация */

// Находим кнопку открытия мобильной навигации
const mobileNavBtnOpen = document.querySelector('#openMobileNav');

// Находим кнопку закрытия мобильной навигации
const mobileNavClose = document.querySelector('#closeMobileNav');

// Находим блок с мобильной навигацией
const mobileNav = document.querySelector('.mobile-nav'); 

// Вешаем прослушку по клику на кнопку Открытия мобильной навигации 
mobileNavBtnOpen.addEventListener('click', function() {


    // По клику добавляем класс mobile-nav--open к блоку с мобильной навигацией
    mobileNav.classList.add('mobile-nav--open');

    // Также добавляем класс no-scroll к тегу body что бы запретить скролл на странице
    document.body.classList.add('no-scroll');
})

// Вешаем прослушку по клику на кнопку Закрытия мобильной навигации 
mobileNavClose.addEventListener('click', function() {
    // По клику удаляем класс mobile-nav--open у блока с мобильной навигацией
    mobileNav.classList.remove('mobile-nav--open');

    // Также удаляем класс no-scroll к тегу body что бы включить скролл на странице
    document.body.classList.remove('no-scroll');
})

/* Закрыть мобильную навигацию по клику по ссылкам внутри мобильной навигации*/
const mobileNavLinks = mobileNav.querySelectorAll('a, button');

// Перебираем все ссылки в мобильной навигации
mobileNavLinks.forEach(function(item){


    // Вешаем прослушку по клику на каждую "ссылку" в мобильной навигации
    item.addEventListener('click', function(){

        // По клику удаляем класс mobile-nav--open у блока с мобильной навигацией
        mobileNav.classList.remove('mobile-nav--open');


        // Также удаляем класс no-scroll к тегу body что бы включить скролл на странице
        document.body.classList.remove('no-scroll');
    })
})