const allList = document.querySelectorAll(".module__item__list")
const allVideos = document.querySelectorAll(".module__videos-item");
const buttons = document.querySelectorAll(".module-menu");
const modulesMenu = document.querySelector(".modules__items");

const removeActiveClassFromSiblings = (arraySiblings) => {
  Array.from(arraySiblings).map( sibling => sibling.classList.remove("active"));
}
const handleModulesMenu = () => {
  modulesMenu.classList.toggle("active");
  document.body.classList.toggle("hidden")
  
  document.querySelector(".module__videos-items").scrollIntoView(
    {
      behavior: "smooth", 
      block: "center",
      inline: "center"
    }
  )
}
const mainCourse = () => {
  const firstElement = allList[0].firstElementChild;
  const firstTarget = firstElement.getAttribute("data-target");

  firstElement.classList.add("active");

  Array.from(allVideos).filter((video) => {
    if (video.getAttribute("id") === firstTarget ) {
      return video.classList.add("active")
    }
  })
}

allList.forEach( list => {
  list.addEventListener("click", (event) => {

    if (event.target.tagName === "LI" || event.target.tagName === "H3") {
      const clickedItem = event.target.closest(".module__item__list__item");
      const clickedTarget = clickedItem.getAttribute("data-target");
      const allSibligs = document.querySelectorAll(".module__item__list__item.active");
      
      removeActiveClassFromSiblings(allSibligs)
      removeActiveClassFromSiblings(allVideos)
      
      clickedItem.classList.add("active");

      Array.from(allVideos).filter((video) => {
        if (video.getAttribute("id") === clickedTarget ) {
          return video.classList.add("active")
        }
      })

      if (window.matchMedia("(max-width: 1200px)").matches) {
        handleModulesMenu()
      } else {
        document.querySelector(".module__videos-items").scrollIntoView(
          {
            behavior: "smooth", 
            block: "center",
            inline: "center"
          }
        )
      }
    }
  })
})

buttons.forEach( button => {
  button.addEventListener("click", handleModulesMenu)
})

mainCourse()