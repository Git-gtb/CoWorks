/* Tiny slider */

const slider = tns({
	container: '.slider',

  items: 2.7,
  gutter: 10,
  mouseDrag: true,
  speed: 400,
  // loop: false, //  ломает работу с lazyLoad

  autoWidth: true,
  lazyload: true,
  swipeAngle: false,

  controlsContainer: '.locations__controls',
  nav: false,
});

//  Кнопки управления слайдером

const prevMobile = document.querySelector('.locations__controls--mobile .prev');
const nextMobile = document.querySelector('.locations__controls--mobile .next');

//  Обращаеся к кнопкам и по событию клика вешаем на них методы перелистывания слайдера вперед и назад
prevMobile.onclick = () => slider.goTo('prev');
nextMobile.onclick = () => slider.goTo('next');
