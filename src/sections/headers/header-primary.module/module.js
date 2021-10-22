const buttonMenuMobile = document.querySelector('.menu-mobile');
const liMenu = document.querySelectorAll('.header .hs-menu-depth-2');
const menuItemsWithChildren = document.querySelectorAll('.header a[aria-haspopup="true"');

function createSubtitle(item, text) {
  const subtitle = document.createElement('p');
    subtitle.textContent = text
    item.children[0].appendChild(subtitle); 
}
function handleTextInSubtitles() {
  createSubtitle(liMenu[0], 'Seus resultados com mais impacto no negócio e visibilidade')
  createSubtitle(liMenu[1], 'A maneira mais rápida de encontrar oportunidades e aumentar as vendas')
}

buttonMenuMobile.addEventListener('click', (event) => {

  event.preventDefault();

  buttonMenuMobile.classList.toggle('active');
  document.querySelector('.header__content').classList.toggle('active');
});
menuItemsWithChildren.forEach( item => {
  item.addEventListener("click", (event) => {
    if (event.pointerType === "touch") {
      
      const drivingElements = ['A', 'SVG'];
      const elementClicked = event.target;

      if (drivingElements.includes(elementClicked.tagName)) {

        elementClicked.classList.toggle('active')

        let parent = elementClicked.parentElement;
        let content = elementClicked.nextElementSibling;

        parent.classList.toggle('active');
        content.classList.toggle('active');

      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  handleTextInSubtitles();

});