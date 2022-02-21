const mainHomeControllersContainer = document.querySelector('.main-home__cards-control');
const allCards = Array.from(document.querySelector('.main-home__cards').children)
const isEnglish = window.document.firstElementChild.lang === 'en'

if (window.matchMedia("(max-width: 760px)").matches) {
  const swiperMobileMainHome = new Swiper('.main-home__slides', {
    loop: false,
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
      nextEl: '.control-2',
      prevEl: '.control-1',
    },
    on: {
      slideChangeTransitionStart: function () {
        mainHomeControllersContainer.classList.toggle('active')
      },
    }
  });
}

if (isEnglish) { 
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://pages.cortex-intelligence.com/hubfs/website-cortex/paginas/home/animacao-video-main-home/data-en.json'
  })

  if (window.matchMedia("(min-width: 1200px)").matches) {
    document.querySelector('.main-home__title').style.width="365px"
    document.querySelector('.main-home__subtitle').style.width="400px"
  }
} else {
  var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://pages.cortex-intelligence.com/hubfs/website-cortex/paginas/home/animacao-video-main-home/data-pt.json'
})
}


