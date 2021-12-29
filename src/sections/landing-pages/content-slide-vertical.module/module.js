
let swiper = null
const isMobile = window.matchMedia("(max-width: 1023px)").matches
const isDesktop = window.matchMedia("(min-width: 1024px)").matches

function getPaginationItems() {
    const disabledItems = Array.from(document.querySelectorAll('.slide-pagination--get__item'));
    const paginationObjects = disabledItems.map( item => {
      
      return {
        title: item.firstElementChild.textContent,
        text: item.lastElementChild.textContent
      }
      
    })

    return paginationObjects
}

function desktopPagination() {
  const pagination = getPaginationItems();

  swiper = new Swiper(".lp-content-slide", {
    pagination: {
      el: ".swiper-custom-pagination--desktop",
      verticalClass: 'swiper-pagination-vertical',
      clickable: true,
      renderBullet: function (index, className) {
        return `
          <div class="${className}">
            <h3>${pagination[index].title}</h3>
            <p>${pagination[index].text}</p>
          </div>
        `
      },
    },
  });

  return swiper
}
function mobilePagination() {
  swiper = new Swiper(".lp-content-slide", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
  return swiper
}

document.addEventListener('DOMContentLoaded', function() {

  const device = isMobile ? mobilePagination() : desktopPagination()

  return device;
})