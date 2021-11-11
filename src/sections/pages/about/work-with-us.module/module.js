const containerSliderChildren = Array.from(document.querySelector('.text-transform-swiper > .swiper-wrapper').children);

function addClassSwiperSlide(array) {
  array.forEach( children => {
    if (children.tagName !== "P") {
      return
    }
    children.classList.add('swiper-slide')
  });
}

function createContentSliderInComponentCardXl() {

  addClassSwiperSlide(containerSliderChildren)
  
  const swiperTestimonial = new Swiper('.text-transform-swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      768: {
        enabled: false,
        loop: false,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        enabled: false,
        loop: false,
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
}


createContentSliderInComponentCardXl()