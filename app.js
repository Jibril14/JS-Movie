const addMovieModal = document.getElementById("add-modal");

const movieButton = document.querySelector("header").lastElementChild;

const backdropElement = document.body.firstElementChild;

const cancelButtonElement = addMovieModal.querySelector(".btn--passive");
const addButtonElement = cancelButtonElement.nextElementSibling;
const allInputElement = document.querySelectorAll("input");
const displayMovieUi = document.getElementById("entry-text");
const deleteDialogModal = document.getElementById("delete-modal");

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

let newMovieElement;
const renderNewMovieElement = (id, tit, imgUrl, rat) => {
    let newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element";
    newMovieElement.innerHTML = `
        <div>
            <img src="${imgUrl}" style="width:250px; height: 180px; border-radius:7px" alt = "${tit}">
        </div>
        <div>
            <h2>${tit} </h2>
            <p>${rat} </p>
        </div>
    `;

    const movieUi = document.getElementById("movie-list");
    movieUi.append(newMovieElement);
    newMovieElement.addEventListener(
        "click",
        deleteMovieHandler.bind(null, id)
    );
};

const confirmDeleteModalDialog = () => {
    deleteDialogModal.classList.add("visible");
};

const movie = [];

const showUi = () => {
    if (movie.length === 0) {
        // Refering to the move array above
        displayMovieUi.style.display = "block";
    } else {
        displayMovieUi.style.display = "none";
    }
};

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
        id: Math.random().toString(),
        title: movieTitle,
        image: movieImage,
        rating: movieRating
    };

    movie.push(newMovie);
    console.log(newMovie);
    toggleMovieModal();
    clearUserInput();
    showUi();
    renderNewMovieElement(
        newMovie.id,
        newMovie.title,
        newMovie.image,
        newMovie.rating
    );
};

const deleteMovieHandler = (movieId) => {
    let movieIndex = 0;
    for (const movi of movie) {
        // Refering to array above
        if (movi.id == movieId) {
            break;
        }
        movieIndex++;
    }
    movie.splice(movieIndex, 1);
    console.log(movieIndex);
    const movieUi = document.getElementById("movie-list");
    movieUi.children[movieIndex].remove();
};

movieButton.addEventListener("click", toggleMovieModal);
backdropElement.addEventListener("click", toggleMovieModal);
cancelButtonElement.addEventListener("click", toggleMovieModal);
addButtonElement.addEventListener("click", addMovieHandler);
