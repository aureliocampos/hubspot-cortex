/* Blog */
function readingRate(textContainerID) {
  // Validação
  if (typeof textContainerID !== "string" || textContainerID.length === 0) {
    throw new Error("Parametro 'textContainerID' inválido");
  }

  let readingRateInSeconds = 0;
  const textContainer = window.document.getElementById(textContainerID);
  const content = textContainer.innerText;
  const wordCount = content.split(" ").length;
  readingRateInSeconds = (wordCount*60)/200;

  let minutes = Math.floor(readingRateInSeconds / 60);
  const container = document.querySelector('.blog-post__read-time em');
  
  container.textContent = `${minutes}min de leitura`;
  
  if( minutes == 0 ){
    container.textContent = `1min de leitura`;
    return
  }
}

function indentifyBlogPaginationPages() {
  const URLPathArray = window.location.pathname.split('/')

  if (URLPathArray.includes('page')) {
    document.head.insertAdjacentHTML('afterbegin','<meta name="robots" content="noindex" />')
    document.head.insertAdjacentHTML('beforeend','<link rel="canonical" href="https://www.cortex-intelligence.com/blog" />')
  }
}

indentifyBlogPaginationPages()