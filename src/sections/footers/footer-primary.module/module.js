const isEnglish = window.document.firstElementChild.lang === 'en'

function addHTMLButtonSupportInFooterMenu() {
  const text = isEnglish ? 'Support' : 'Suporte';

  const menuFooter = document.querySelector('.footer__menu ul[role="menu"]');
  const HTMLButton = `<li class="hs-menu-item hs-menu-depth-1" role="none"><a href="https://atendimentocortex.zendesk.com/hc/pt-br" target="_blank" rel="noopener noreferrer" class="support--link"><span class="icon-headset-support"></span>${text}</a></li>`
  
  menuFooter.insertAdjacentHTML('beforeend', HTMLButton)
}

document.addEventListener("DOMContentLoaded", function() {
  newFunction();

  function newFunction() {
    addHTMLButtonSupportInFooterMenu();
  }
})
