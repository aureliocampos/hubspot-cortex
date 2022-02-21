const isEnglish = window.document.firstElementChild.lang === 'en'
const modal = document.querySelector('.modal-blog');

if (isEnglish) {
  const blogMain = document.querySelector('.blog-main-content');
  const newsletter = document.querySelector('#form-newsletter-full');

  blogMain.style.display = "none";
  blogMain.insertAdjacentHTML('afterend', '<div style="height:100vh;width: 100%;">.</div>')

  newsletter.style.display = 'none';
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'relative';
}