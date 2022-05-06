const swiperTestimonial = new Swiper('.swiper-double-testimonial', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  autoplay: {
    delay: 20000,
    disableOnInteraction: false,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});


// function animateLoadingArrowsPrev() {
//   const elementAnimation = document.querySelectorAll(`.arrow-prev > .circle-animation`);
  
//   const animations = document.querySelectorAll('.arrow-next > .circle-animation');
  
//   animations.forEach( item => {

//     const animate = item.getAnimations()
//     if (animate.length !== 0 ) {
//       animate.forEach( anime => anime.cancel())
//       return
//     }
//   })


//   elementAnimation.forEach( item => {
//     item.animate(
//       [
//         { strokeDashoffset: '0px' },
//         { strokeDashoffset: '-140px' }
//       ],
//       {
//         duration: 20000, // Deve ser o mesmo tempo da propriedade "delay", do objeto "autoplay" passado no SWIPER
//         iterations: 1
//       }
//     )
//   })
// }

// function animateLoadingArrowsNext() {
//   const elementAnimation = document.querySelectorAll(`.arrow-next > .circle-animation`);
  
  
//   const animations = document.querySelectorAll('.arrow-prev > .circle-animation');
  
//   animations.forEach( item => {

//     const animate = item.getAnimations()

//     if (animate.length !== 0 ) {
//       animate.forEach( anime => anime.cancel())
//       return
//     }
//   })

//   elementAnimation.forEach( item => {
//     item.animate(
//       [
//         { strokeDashoffset: '0px' },
//         { strokeDashoffset: '-140px' }
//       ],
//       {
//         duration: 15000, // Deve ser o mesmo tempo da propriedade "delay", do objeto "autoplay" passado no SWIPER
//         iterations: 1
//       }
//     )
//   })
// }