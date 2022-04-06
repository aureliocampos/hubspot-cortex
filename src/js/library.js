const jsonInHTMLScript = document.getElementById("data-library")
const gridContainer = document.getElementById("library-grid")
const containerFilter = document.querySelector('.filters');
const buttonLoadMore = document.getElementById("button__loadmore");
const filterForm = document.querySelector("#form-filters");

const buttonOpenFilter = document.querySelector('#open-filter');
const buttonClosedFilter = document.querySelector('#closed-filter');
const buttonActionFilter = document.querySelector("#action-filter");
const clearFilter = document.querySelector("#clear-filter");

const errorMessage = () => {
  const tagMessage = `
    <p class="error-message">Não foi possível encontrar uma resultado para a sua busca.</p>
  `
  buttonLoadMore.style.display = "none"
  gridContainer.insertAdjacentHTML("afterbegin", tagMessage)
}
const handleDataJson = (jsonHTML) => {
  const stringJson = jsonHTML.textContent.trim().replaceAll("\n", "")
  const dataJson = JSON.parse(stringJson);
  const posts = Array.from(dataJson.data);

  return posts
}
const createPostCard = (item) => {
  const { 
    title,
    description,
    featuredImage,
    featuredImageAlt,
    url,
    category,
    materialType
  } = item

  let labelCategory, labelMaterial;

  switch (category) {
    case "comunicacao":
      labelCategory = "Comunicação"
      break;
    case "marketing":
      labelCategory = "Marketing"
      break;
    case "vendas":
      labelCategory = "Vendas"
      break;
    case "inteligencia":
      labelCategory = "Inteligência"
      break;
    default:
      labelCategory = "Sem Categoria"
      break;
  }

  switch (materialType) {
    case "ebook":
      labelMaterial = "eBook"
      break;
    case "meetup":
      labelMaterial = "Meetup"
      break;
    case "caso_de_sucesso":
      labelMaterial = "Caso de Sucesso"
      break;
    case "cartilha":
      labelMaterial = "Cartilha"
      break;
    default:
      labelMaterial = "Sem Categoria"
      break;
  }



  return `
    <article class="card-primary__article" 
      data-category="${category}"
      data-material="${materialType}"
    >
      <figure class="card-primary__figure">
        <a href="${url}" target="_blank" rel="noopener noreferrer">
          <img 
            data-src="${featuredImage}" 
            data-srcset="${featuredImage} 345w" 
            sizes="345px" 
            alt="${featuredImageAlt}"
            class="lazyload card-primary__image"
            width="345px"
            height="190px"
          />
        </a>
      </figure>
    <div class="card-primary__summary">
      <a href="${url}" target="_blank" rel="noopener noreferrer">
        <h2 class="card-primary__name">${title}</h2>
        <p class="card-primary__description">${description}</p>
        <span class="card-primary__tag">${labelCategory}</span>
        <span class="card-primary__tag">${labelMaterial}</span>
      </a>
    </div>
  </article>
  <hr class="blog-listing__items__separator">
  `
}
const mountLibraryGrid = (dataPosts) => {
  // Sempre percorre o arry para criar os cards
  let gridContent = dataPosts.map(item => createPostCard(item))

  // Adiciona os novos cards ao gridContainer
  gridContainer.insertAdjacentHTML("afterbegin", gridContent.slice(0, 6).join(""))

  if (gridContent.length > 6) {
    buttonLoadMore.style.display = "block"
  } else {
    buttonLoadMore.style.display = "none"
  }
}
const insertGrid = (results) => {
  gridContainer.innerText = ""
  
  if (!results.length) {
    return errorMessage()
  }
  mountLibraryGrid(results)
}

let countPostsRender = 6
let data = handleDataJson(jsonInHTMLScript)
let categories = []
let materialTypes = []

filterForm.addEventListener("click", (event) => {
  const isInput = event.target.tagName === "INPUT";
 
  if (isInput) {

    countPostsRender = 6

    const checkboxTarget = event.target;

    if (event.target.name === "categories" && checkboxTarget.checked === true && !categories.includes(checkboxTarget.value)) {
      categories.push(checkboxTarget.value)
    } else {
      categories.filter( (item, index) => {
        if (item === checkboxTarget.value) {
          categories.splice(index, 1)
        }
      })
    }

    if (event.target.name === "material" && checkboxTarget.checked === true && !materialTypes.includes(checkboxTarget.value)) {
      materialTypes.push(checkboxTarget.value)
    } else {
      materialTypes.filter( (item, index) => {
        if (item === checkboxTarget.value) {
          materialTypes.splice(index, 1)
        }
      })
    }

    if (!categories.length && !materialTypes.length) {
      data = handleDataJson(jsonInHTMLScript)
    } else {
      data = handleDataJson(jsonInHTMLScript).filter((item) => {
        if (!materialTypes.length && categories.includes(item.category)) {
          return item
        } else if (!categories.length && materialTypes.includes(item.materialType)) {
          return item
        } else if(materialTypes.includes(item.materialType) && categories.includes(item.category)) {
          return item
        } else {
          return
        }
      })
    }

    insertGrid(data)
  } 
})
buttonLoadMore.addEventListener("click", () => {
  const nextPosts = data.slice(countPostsRender, countPostsRender + 6)
  const gridNextPosts = nextPosts.map(item => createPostCard(item)).join("")

  gridContainer.insertAdjacentHTML("beforeend", gridNextPosts)
  countPostsRender = countPostsRender + 6

  if (countPostsRender >= data.length ){
    buttonLoadMore.style.display = "none"
  }
})
buttonOpenFilter.addEventListener("click", () => {
  containerFilter.classList.add('active');
  document.body.classList.toggle("overflow")
})
buttonClosedFilter.addEventListener("click", () => {
  containerFilter.classList.remove('active');
  window.scrollTo(0, 0);
  document.body.classList.toggle("overflow")
})
buttonActionFilter.addEventListener("click", (event) => {
  event.preventDefault();
  containerFilter.classList.remove('active');
  window.scrollTo(0, 0);
  document.body.classList.toggle("overflow")
})
clearFilter.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo(0, 0);
  
  if (document.body.classList.contains("overflow")) {
    document.body.classList.remove("overflow")
  }
  
  const a = document.querySelectorAll("#form-filters input[type='checkbox']")
  a.forEach( item => item.checked = false )
  categories = []
  materialTypes = []

  data = handleDataJson(jsonInHTMLScript)
  insertGrid(data)

  containerFilter.classList.remove('active');
})

console.log("Revisão 22");
mountLibraryGrid(data)