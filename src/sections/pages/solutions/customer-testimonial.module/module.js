const swiperTestimonial = new Swiper('.swiper-testimonial', {
  loop: true,
  autoplay: {
    delay: 15000,
    disableOnInteraction: false,
  },
  effect: "fade",
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
 
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
  on: {
    slidePrevTransitionStart: function () {
      animateLoadingArrowsPrev('.arrow-prev')
    },
    slideNextTransitionStart: function () {
      animateLoadingArrowsNext('.arrow-next')
    },
  }
});


function animateLoadingArrowsPrev() {
  const elementAnimation = document.querySelectorAll(`.arrow-prev > .circle-animation`);
  
  const animations = document.querySelectorAll('.arrow-next > .circle-animation');
  
  animations.forEach( item => {

    const animate = item.getAnimations()
    if (animate.length !== 0 ) {
      animate.forEach( anime => anime.cancel())
      return
    }
  })


  elementAnimation.forEach( item => {
    item.animate(
      [
        { strokeDashoffset: '0px' },
        { strokeDashoffset: '-140px' }
      ],
      {
        duration: 15000, // Deve ser o mesmo tempo da propriedade "delay", do objeto "autoplay" passado no SWIPER
        iterations: 1
      }
    )
  })
}

function animateLoadingArrowsNext() {
  const elementAnimation = document.querySelectorAll(`.arrow-next > .circle-animation`);
  
  
  const animations = document.querySelectorAll('.arrow-prev > .circle-animation');
  
  animations.forEach( item => {

    const animate = item.getAnimations()

    if (animate.length !== 0 ) {
      animate.forEach( anime => anime.cancel())
      return
    }
  })

  elementAnimation.forEach( item => {
    item.animate(
      [
        { strokeDashoffset: '0px' },
        { strokeDashoffset: '-140px' }
      ],
      {
        duration: 15000, // Deve ser o mesmo tempo da propriedade "delay", do objeto "autoplay" passado no SWIPER
        iterations: 1
      }
    )
  })
}