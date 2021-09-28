const swiperResources = new Swiper('.swiper-rel-resources', {
  lazy: true,
  speed: 400,
  slidesPerView: 1,
  spaceBetween: 100,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: false,
    }
  }
});

