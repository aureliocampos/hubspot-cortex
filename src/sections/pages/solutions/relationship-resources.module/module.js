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

function handlesCardHeight(className) {
  const titles = Array.from(document.querySelectorAll(className));
  const heights = titles.map( title => title.offsetHeight )

  const heightParam = heights.reduce((acc, height) => {
    return Math.max(acc, height);
  }, 0);
  
  if (heightParam < 84) {

    const contents = Array.from(document.querySelectorAll('.rel-resources__card-description'))
    return contents.forEach( content => content.style.height = '150px' )

  } else if ( heightParam >= 85 && heightParam < 100 ) {

    const contents = Array.from(document.querySelectorAll('.rel-resources__card-description'))
    return contents.forEach( content => content.style.height = '180px' )

  } else {
    
    const contents = Array.from(document.querySelectorAll('.rel-resources__card-description'))
    return contents.forEach( content => content.style.height = '200px' )
    
  }
}

document.addEventListener('DOMContentLoaded', function() {
  handlesCardHeight('.rel-resources__card-title')
  
  const isEnglish = window.document.firstElementChild.lang === 'en'
  
  if (isEnglish) {
    const buttons = Array.from(document.querySelectorAll('.button.button--primary') )
    
    buttons.forEach((button) => {
      const newText = button.textContent.replace('Baixar', 'Download')
      button.textContent = newText
    })
  }
})


