const swiperResources = new Swiper('.featured-posts__swiper', {
  autoplay: true,
  loop:true,
  lazy: {
    loadPrevNext: true,
  },
  speed: 400,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  }
});