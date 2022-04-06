// const buttonOpenFilter = document.querySelector('#open-filter');
// const buttonClosedFilter = document.querySelector('#closed-filter');

// const toggleFilter = button => {
//   button.addEventListener("click", () => {
//     const containerFilter = document.querySelector('.filters');
//     containerFilter.classList.toggle('active');

//     document.body.classList.toggle("overflow")
//   });
// }

// toggleFilter(buttonOpenFilter)
// toggleFilter(buttonClosedFilter)


// const allPosts = Array.from(document.querySelectorAll(".card-primary__article"));
// const form = document.querySelector("#form-filters");
// const checkboxInputs = document.querySelectorAll("input[name='filters']");
// const errorMessage = document.querySelector(".error-message");
// const buttonLoadMore = document.querySelector(".loadmore-container");

// let categories = []
// let materialTypes = []

// const loadPosts = (posts) => {
//   if (posts.length > 5) {
//     buttonLoadMore.style.display = "flex";
//     posts.forEach( (item, index ) => { 
//       if(index < 6) { 
//         item.classList.add("active")
//       } 
//     })
//   }
// }

// const startDefault = () => {
//   if (categories.length === 0 && materialTypes.length === 0 ) {
//     loadPosts(allPosts)
//   }
// }
// const loadMoreFilter = (button) => {
//   button.addEventListener("click", (event) => {
//     event.preventDefault();
//     const postsFilter = document.querySelectorAll(".post-hidden");
  
//     if (postsFilter.length < 6) {
//       button.style.display = "none";
//     }
  
//     postsFilter.forEach((item, index) => {
//       if (index < 6) {
//         item.classList.remove("post-hidden")
//       }
//     })
//   })
// }

// form.addEventListener('click', (event) => {

//   if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
//     const checkbox = event.target;

//     if (checkbox.name === "categories") {
//       if (checkbox.checked && !categories.includes(checkbox.value)) {
//         categories.push(checkbox.value)
//       } else {
//         categories.filter( (item, index) => {
//           if (item === checkbox.value) {
//             categories.splice(index, 1)
//           }
//         })
//       }
//     }

//     if (checkbox.name === "material") {
//       if (checkbox.checked && !materialTypes.includes(checkbox.value)) {
//         materialTypes.push(checkbox.value)
//       } else {
//         materialTypes.filter( (item, index) => {
//           if (item === checkbox.value) {
//             materialTypes.splice(index, 1)
//           }
//         })
//       }
//     }

//     const postsFiltered = allPosts.filter( post => {
//       const postCategory = post.dataset.category;
//       const postMaterial = post.dataset.material;

//       if (categories.includes(postCategory) && materialTypes.includes(postMaterial)) {
//         post.classList.add("active")
//         return post
//       } else if (categories.length === 0 && materialTypes.includes(postMaterial)) {
//         post.classList.add("active")
//         return post
//       } else if (materialTypes.length === 0 && categories.includes(postCategory)) {
//         post.classList.add("active")
//         return post
//       } else {
//         post.classList.remove("active")
//         return post
//       }
//     })

//     const newGrid = postsFiltered.filter( post => post.classList.contains('active'))

//     if (newGrid.length > 5) {
//       newGrid.forEach( (item, index ) => { 
//         if(index > 5) { 
//           item.classList.add("post-hidden")
//         } 
//       })

//       buttonLoadMore.style.display = "flex";
//       buttonLoadMore.classList.add("isfilter")
//       loadMoreFilter(buttonLoadMore)

//     } else {
//       buttonLoadMore.style.display = "none";
//     }

//     if (newGrid.length === 0 && checkbox.checked === true) {
//       errorMessage.classList.add("active")
//       buttonLoadMore.style.display = "none";
//     } else {
//       errorMessage.classList.remove("active")
//     }
    
//     if (categories.length === 0 && materialTypes.length === 0) {
//       errorMessage.classList.remove("active")
//       buttonLoadMore.classList.remove("isfilter")
//       loadPosts(allPosts)
//     }
//   }
// })

// startDefault()