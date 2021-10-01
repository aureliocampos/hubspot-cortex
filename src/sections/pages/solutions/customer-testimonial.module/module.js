const swiperTestimonial = new Swiper('.swiper-testimonial', {
  loop: true,
  speed: 400,
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: '.icon-arrow-next',
    prevEl: '.icon-arrow-prev',
  },
});
