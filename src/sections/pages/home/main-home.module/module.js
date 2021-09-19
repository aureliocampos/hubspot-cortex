const solutionCards = Array.from(document.querySelector('.main-home__cards').children)
let isPaused = false
let time = 0

function createAnimationCard(card) {

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
      duration: 8000,
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

  console.log(video);
  video.addEventListener('ended', displayTime)

}
const allCards = solutionCards

allCards[0].classList.add('active')
createAnimationCard(allCards[0])

  
function displayTime() {

  if (allCards[0].classList.contains('active')) {

    allCards[0].classList.remove('active')
    const video = document.querySelector(`#${allCards[0].dataset.target}`)
    video.classList.remove('active')
    
    allCards[1].classList.add('active')
    createAnimationCard(allCards[1])
    return
  }

  if (allCards[1].classList.contains('active')) {

    allCards[1].classList.remove('active')
    const video = document.querySelector(`#${allCards[1].dataset.target}`)
    video.classList.remove('active')

    allCards[0].classList.add('active')
    createAnimationCard(allCards[0])

    return
  }

}