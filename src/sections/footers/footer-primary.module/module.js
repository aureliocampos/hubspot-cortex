function addArrowInButtonOfNewsletter() {
  setTimeout(() => {
    const buttonSubmit = document.querySelector('.footer__form form .actions');
    buttonSubmit.innerHTML += '<span class="icon-input-seta"></span>'
    
  }, 1000);
}

document.addEventListener("DOMContentLoaded", addArrowInButtonOfNewsletter)


