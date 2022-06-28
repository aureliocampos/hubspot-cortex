const jsonInHTMLScript = document.getElementById("data-cases")
const gridContainer = document.getElementById("library-grid")
const containerFilter = document.querySelector('.filters');
const buttonLoadMore = document.getElementById("button__loadmore");
const filterForm = document.querySelector("#form-filters");

const buttonOpenFilter = document.querySelector('#open-filter');
const buttonClosedFilter = document.querySelector('#closed-filter');
const buttonActionFilter = document.querySelector("#action-filter");
const clearFilter = document.querySelector("#clear-filter");
const InputSearch = document.getElementById("input-search");

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
    sizeCompany,
    product,
    sector,
    challenge
  } = item

  let labelProduct;

  switch (product) {
    case "inteligencia_de_vendas_b2b":
      labelProduct = "Inteligência de Vendas B2B"
      break;
    case "comunicacao_estrategica_e_reputacao":
      labelProduct = "Comunicação estratégica e reputação"
      break;
  }

  return `
    <article class="card-primary__article" 
      data-size="${sizeCompany}"
      data-challenge="${challenge}"
      data-sector="${sector}"
      data-product="${product}"
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
        <span class="card-primary__tag">${labelProduct}</span>
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

let sizeCompany = []; 
let product = [];
let challenge = [];
let sector = [];

filterForm.addEventListener("click", (event) => {
  const checkboxTarget = event.target;
  const isInput = event.target.tagName === "INPUT";
 
  if (isInput) {

    countPostsRender = 6

    if (checkboxTarget.name === "size-company" && checkboxTarget.checked === true && !sizeCompany.includes(checkboxTarget.value)) {
      sizeCompany.push(checkboxTarget.value)
    } else {
      sizeCompany.filter( (item, index) => {
        if (item === checkboxTarget.value) {
          sizeCompany.splice(index, 1)
        }
      })
    }

    if (checkboxTarget.name === "product" && checkboxTarget.checked === true && !product.includes(checkboxTarget.value)) {
      product.push(checkboxTarget.value)
    } else {
      product.filter( (item, index) => {
        if (item === checkboxTarget.value) {
          product.splice(index, 1)
        }
      })
    }

    if (checkboxTarget.name === "challenge" && checkboxTarget.checked === true && !challenge.includes(checkboxTarget.value)) {
      challenge.push(checkboxTarget.value)
    } else {
      challenge.filter( (item, index) => {
        if (item === checkboxTarget.value) {
          challenge.splice(index, 1)
        }
      })
    }

    if (checkboxTarget.name === "sector" && checkboxTarget.checked === true && !sector.includes(checkboxTarget.value)) {
      sector.push(checkboxTarget.value)
    } else {
      sector.filter( (item, index) => {
        if (item === checkboxTarget.value) {
          sector.splice(index, 1)
        }
      })
    }

    if (!sizeCompany.length && !product.length && !challenge.length && !sector.length) {
      data = handleDataJson(jsonInHTMLScript)
    } else {
      data = handleDataJson(jsonInHTMLScript).filter((item) => {

        const verify = sizeCompany.includes(item.sizeCompany) || product.includes(item.product) || challenge.includes(item.challenge) || sector.includes(item.sector);

        console.log(verify);

        return verify ? item : false;
        
        
        // if ( sizeCompany.includes(item.sizeCompany) && !product.length && !challenge.length) {
        //   return item
        // } else if (!sizeCompany.length && product.includes(item.product) && !challenge.length) {
        //   return item
        // } else if (!sizeCompany.length && !product.length && challenge.includes(item.challenge)) {
        //   return item
        // } else if(product.includes(item.product) && sizeCompany.includes(item.sizeCompany) && challenge.includes(item.challenge)) {
        //   return item
        // } else {
        //   return
        // }
      })
    }

    const dataFilter = data.filter( post => post.title.toLowerCase().includes(InputSearch.value));

    insertGrid(dataFilter)
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
  sizeCompany = []
  product = []
  InputSearch.value = ""
  data = handleDataJson(jsonInHTMLScript)
  insertGrid(data)

  containerFilter.classList.remove('active');
})

InputSearch.addEventListener('input', (event) => {
  const filterText = event.target.value.toLowerCase();
  const dataFilter = data.filter( post => post.title.toLowerCase().includes(filterText));
  insertGrid(dataFilter)
})


mountLibraryGrid(data)