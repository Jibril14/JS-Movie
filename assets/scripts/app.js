const addMovieModal = document.getElementById("add-modal");

const movieButton = document.querySelector("header").lastElementChild;

const backdropElement = document.body.firstElementChild;

const cancelButtonElement = addMovieModal.querySelector(".btn--passive");
const addButtonElement = cancelButtonElement.nextElementSibling;
const allInputElement = document.querySelectorAll("input");

function toggleMovieModal() {
    addMovieModal.classList.toggle("visible");
    addbackdrop();
}

const addbackdrop = () => {
    backdropElement.classList.toggle("visible");
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

const clearUserInput = () => {
    for (const inp of allInputElement) {
        inp.value = "";
    }
};

const movie = [];

const addMovieHandler = () => {
    movieTitle = allInputElement[0].value;
    movieImage = allInputElement[1].value;
    movieRating = allInputElement[2].value;

    if (
        movieTitle.trim() === "" ||
        movieImage.trim() === "" ||
        movieRating.trim() === "" ||
        +movieRating < 1 ||
        +movieRating > 5
    ) {
        alert("Please enter valid values");
        return;
    }
    const newMovie = {
        title: movieTitle,
        image: movieImage,
        rating: movieRating
    };

    movie.push(newMovie);
    console.log(newMovie);
    toggleMovieModal();
    clearUserInput();
};

movieButton.addEventListener("click", toggleMovieModal);
backdropElement.addEventListener("click", toggleMovieModal);
cancelButtonElement.addEventListener("click", toggleMovieModal);
addButtonElement.addEventListener("click", addMovieHandler);
