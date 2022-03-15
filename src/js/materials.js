const buttonOpenFilter = document.querySelector('#open-filter');
const buttonClosedFilter = document.querySelector('#closed-filter');

const toggleFilter = button => {
  button.addEventListener("click", () => {
    const containerFilter = document.querySelector('.filters');
    containerFilter.classList.toggle('active');

    document.body.style.overflow = "hidden"
  });
}

toggleFilter(buttonOpenFilter)
toggleFilter(buttonClosedFilter)