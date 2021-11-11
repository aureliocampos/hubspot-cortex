// const mainHomeControllersContainer = document.querySelector('.main-home__cards-control');
// const allCards = Array.from(document.querySelector('.main-home__cards').children)

// if (window.matchMedia("(max-width: 760px)").matches) {
//   const swiperMobileMainHome = new Swiper('.main-home__slides', {
//     loop: false,
//     speed: 400,
//     slidesPerView: 1,
//     spaceBetween: 30,
//     centeredSlides: true,
//     navigation: {
//       nextEl: '.control-2',
//       prevEl: '.control-1',
//     },
//     on: {
//       slideChangeTransitionStart: function () {
//         mainHomeControllersContainer.classList.toggle('active')
//       },
//     }
//   });
// }

// if (window.matchMedia("(min-width: 760px)").matches) {
//   function addAnimationCard(card) {

//     const current = card
//     const video = document.querySelector(`#${current.dataset.target}`)
//     video.classList.add('active')
//     video.load();
//     video.addEventListener('ended', whichCardisActive)
//   }
    
//   function whichCardisActive() {

//     if (allCards[0].classList.contains('active')) {
  
//       allCards[0].classList.remove('active')
//       const video = document.querySelector(`#${allCards[0].dataset.target}`)
//       video.classList.remove('active')
      
//       allCards[1].classList.add('active')
//       addAnimationCard(allCards[1])
//       return
//     }
  
//     if (allCards[1].classList.contains('active')) {
  
//       allCards[1].classList.remove('active')
//       const video = document.querySelector(`#${allCards[1].dataset.target}`)
//       video.classList.remove('active')
  
//       allCards[0].classList.add('active')
//       addAnimationCard(allCards[0])
  
//       return
//     }
  
//   }

//   document.querySelector('.main-home__slides').classList.remove('swiper')
//   document.querySelector('.main-home__items').classList.remove('swiper-wrapper')
//   document.querySelectorAll('.main-home__card').forEach( item => item.classList.remove('swiper-slide'))

//   allCards[0].classList.add('active')
//   addAnimationCard(allCards[0])
// }


