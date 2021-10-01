const platarfomItems = document.querySelector('.plataform-cortex.desktop .plataform-cortex__items');
const platarfomItemsChildrens = Array.from(document.querySelectorAll('.plataform-cortex__item'));
const plataformItemsTargets = Array.from(document.querySelectorAll('.plataform-cortex__figure--target'));

const handleClickingOnPlatformItems = () => {

  platarfomItems.children[0].classList.add('active')
  plataformItemsTargets[0].classList.add('active')

  platarfomItems.addEventListener('click', (event) => {
    const itemsCheckedInClicked = ['SPAN', 'ARTICLE', 'H2', 'P', 'LI']

    if (itemsCheckedInClicked.includes(event.target.tagName)) {
 
      const clickedItem = event.target.closest("li.plataform-cortex__item")

      if (clickedItem.classList.contains('active')) {
        return null
      } else {
        platarfomItemsChildrens.map( item => item.classList.remove('active'))
        plataformItemsTargets.map( item => {

          item.classList.remove('active')

          if (item.id === clickedItem.dataset.target) { 
            return clickedItem.classList.add('active'), 
            item.classList.add('active');
          }
        });

      }
    }
  })
}

handleClickingOnPlatformItems()