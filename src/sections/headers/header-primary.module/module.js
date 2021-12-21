const buttonMenuMobile = document.querySelector('.menu-mobile');

const liMenu = document.querySelectorAll('.header .hs-menu-depth-2');
const menuItemsWithChildren = document.querySelectorAll('.header a[aria-haspopup="true"]');

function createSubtitle(item, text) {
  const subtitle = document.createElement('p');
    subtitle.textContent = text
    item.children[0].appendChild(subtitle); 
}
function handleTextInSubtitles() {
  if (document.firstElementChild.lang === 'pt-br') {
    createSubtitle(liMenu[0], 'Seus resultados com mais impacto no negócio e visibilidade')
    createSubtitle(liMenu[1], 'A maneira mais rápida de encontrar oportunidades e aumentar as vendas')
    return
  }
  if (document.firstElementChild.lang === 'en') {
    createSubtitle(liMenu[0], 'Your results with more business impact and visibility')
    createSubtitle(liMenu[1], 'The fastest way to find opportunities and increase sales')
    return
  }
}
function languageToggle() {
  const isPortugues = document.firstElementChild.lang === 'pt-br'
  const isEnglish = document.firstElementChild.lang === 'en'
  const buttonLangCurrent = document.querySelector('button[data-lang="lang-current"]')
  const buttonLangPortugues = document.querySelector('a[data-lang="lang-pt"]')
  const buttonLangEnglish = document.querySelector('a[data-lang="lang-en"]')
  let langCurrentText;

  if (isPortugues) {
    langCurrentText = "Português"
    buttonLangCurrent.lastElementChild.insertAdjacentText('beforebegin', langCurrentText)

    if (buttonLangPortugues) {
      buttonLangPortugues.classList.toggle('disabled') 
    }
  }
  if (isEnglish) {
    langCurrentText = "English"
    buttonLangCurrent.lastElementChild.insertAdjacentText('beforebegin', langCurrentText)
    
    if (buttonLangEnglish) {
      buttonLangEnglish.classList.toggle('disabled') 
    }
  }

  buttonLangCurrent.addEventListener('click', () => {
    const langOptions = document.querySelector('.header__language-switcher-options');

    langOptions.classList.toggle('active')
  })
}

document.addEventListener('DOMContentLoaded', () => {

  buttonMenuMobile.addEventListener('click', () => {

    buttonMenuMobile.classList.toggle('active');
    document.querySelector('.header__content').classList.toggle('active');
  });



  Array.from(menuItemsWithChildren).forEach( item => {
    item.addEventListener("click", (event) => {
      event.preventDefault()
      const drivingElements = ['A', 'SVG'];
      const elementClicked = event.target;

      if (drivingElements.includes(elementClicked.tagName)) {

        elementClicked.classList.toggle('active')

        let parent = elementClicked.parentElement;
        let content = elementClicked.nextElementSibling;

        parent.classList.toggle('active');
        content.classList.toggle('active');

      }
    });
  });

  handleTextInSubtitles();

  languageToggle()
});


