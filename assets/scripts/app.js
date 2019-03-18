const addMovieModal = document.getElementById("add-modal");

const movieButton = document.querySelector("header").lastElementChild;

const backdropElement = document.body.firstElementChild;

const cancelButtonElement = addMovieModal.querySelector(".btn--passive");
const addButtonElement = cancelButtonElement.nextElementSibling;
const allInputElements = document.querySelectorAll();

function addMovie() {
    addMovieModal.classList.toggle("visible");
    addbackdrop();
}

const addbackdrop = () => {
    backdropElement.classList.toggle("visible");
};

const backdropClickHandler = () => {
    addMovie();
};

movieButton.addEventListener("click", addMovie);
backdropElement.addEventListener("click", addMovie);
cancelButtonElement.addEventListener("click", addMovie);
