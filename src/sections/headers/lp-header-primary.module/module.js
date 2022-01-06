const headerLogos = document.querySelectorAll('.header__figure');
const links = document.querySelectorAll('a[href^="#"]');

if (headerLogos.length > 1) {
  const header = document.querySelector('.header__container');
  header.style.justifyContent = "space-between";
} 

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  const y = document.querySelector(href).getBoundingClientRect().top + window.pageYOffset + -20;

  window.scrollTo({top: y, behavior: 'smooth'});

}

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
