const links = document.querySelectorAll('a[href^="#"]');

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




function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
