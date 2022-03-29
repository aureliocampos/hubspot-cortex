const buttonOpenFilter = document.querySelector('#open-filter');
const buttonClosedFilter = document.querySelector('#closed-filter');

const toggleFilter = button => {
  button.addEventListener("click", () => {
    const containerFilter = document.querySelector('.filters');
    containerFilter.classList.toggle('active');

    document.body.classList.toggle("overflow")
  });
}

toggleFilter(buttonOpenFilter)
toggleFilter(buttonClosedFilter)


// $(document).ready(function(){
//   $(function () {
//       $(".blog-hidden").slice(0, 6).show();
//       $("#button__loadmore").on('click', function (e) {
//           e.preventDefault();
//           $(".blog-hidden:hidden").slice(0, 6).slideDown();
//           if ($(".blog-hidden:hidden").length == 0) {
//               $("#load").fadeOut('slow');
//           }
//       });
//   });
// });


const loadMoreArticles = () => {
  const getArticles = Array.from(document.querySelectorAll(".blog-hidden"));
  const articlesOffset = getArticles.slice(0, 6);
  const loadmoreButton = document.querySelector("#button__loadmore");

  articlesOffset.forEach( item => {
    item.classList.remove("blog-hidden")
    item.style.display = "block"
  })

  loadmoreButton.addEventListener("click", (event) => {
    event.preventDefault();
    const getArticles = Array.from(document.querySelectorAll(".blog-hidden"));
    const articlesOffset = getArticles.slice(0, 6);

    articlesOffset.forEach( item => {
      item.classList.remove("blog-hidden")
      item.style.display = "block"
    })

    if (!getArticles) {
      loadmoreButton.style.display = "none"
    }
  })

}
loadMoreArticles()

