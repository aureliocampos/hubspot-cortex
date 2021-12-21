const mainHomeControllersContainer = document.querySelector('.main-home__cards-control');
const allCards = Array.from(document.querySelector('.main-home__cards').children)

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

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bm'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'https://pages.cortex-intelligence.com/hubfs/raw_assets/public/teste-video/data.json'
})