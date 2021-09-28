const swiperTestimonial = new Swiper('.swiper-testimonial', {
  loop: true,
  speed: 400,
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.icon-arrow-round-next',
    prevEl: '.icon-arrow-round-prev',
  },
});
