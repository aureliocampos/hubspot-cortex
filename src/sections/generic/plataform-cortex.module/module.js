const isEnglish = window.document.firstElementChild.lang === 'en'
const containerTitle = document.querySelector('#section-title--plataform')
 
if (isEnglish) {
  const text = `Cortex <strong>Plataform</strong>`
  containerTitle.innerHTML = text;
} else {
  const text = `<strong>Plataforma</strong> Cortex`
  containerTitle.innerHTML = text;
}
