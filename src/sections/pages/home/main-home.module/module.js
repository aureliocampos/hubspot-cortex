const allCards = Array.from(document.querySelector('.main-home__cards').children)

function addAnimationCard(card) {

  const current = card
  const video = document.querySelector(`#${current.dataset.target}`)
  video.classList.add('active')
  video.load();

  const progressBar = card.firstElementChild

  const progressBarAnimation = progressBar.animate(
    {
      width: ["0%", "100%"] 
    },
    {
      duration: 7000,
      pseudoElement: "::after",
    },
  )
  current.addEventListener('mouseenter', () => {
    video.pause();
    progressBarAnimation.pause();
    isPaused = true;
  })

  current.addEventListener('mouseleave', () => {
    video.play();
    progressBarAnimation.play();
    isPaused = false;
  })

  video.addEventListener('ended', whichCardisActive)

}
  
function whichCardisActive() {

  if (allCards[0].classList.contains('active')) {

    allCards[0].classList.remove('active')
    const video = document.querySelector(`#${allCards[0].dataset.target}`)
    video.classList.remove('active')
    
    allCards[1].classList.add('active')
    addAnimationCard(allCards[1])
    return
  }

  if (allCards[1].classList.contains('active')) {

    allCards[1].classList.remove('active')
    const video = document.querySelector(`#${allCards[1].dataset.target}`)
    video.classList.remove('active')

    allCards[0].classList.add('active')
    addAnimationCard(allCards[0])

    return
  }

}

allCards[0].classList.add('active')
addAnimationCard(allCards[0])