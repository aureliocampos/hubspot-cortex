function addArrowInButtonOfNewsletter() {
  setTimeout(
    () => {
      const buttonSubmit = document.querySelector('.footer__form form .actions');
      buttonSubmit.innerHTML += '<span class="icon-input-seta"></span>'
      
    }, 1000);
}

function addHTMLButtonSupportInFooterMenu() {
  const HTMLButton = `<li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://atendimentocortex.zendesk.com/hc/pt-br" target="_blank" rel="noopener noreferrer" class="support--link"><span class="icon-headset-support"></span>Suporte</a></li>`
  const menuFooter = document.querySelector('.footer__menu ul[role="menu"]');
  
  menuFooter.insertAdjacentHTML('beforeend', HTMLButton)
}

document.addEventListener("DOMContentLoaded", function() {
  newFunction();

  function newFunction() {
    addHTMLButtonSupportInFooterMenu();
    addArrowInButtonOfNewsletter();
  }
})
