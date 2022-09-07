const addMovieModal = document.getElementById("add-modal");
const addMovieBtn = document.getElementById("add-movie");
const backdrop = document.getElementById("backdrop");

const addMovieAddBtn = addMovieModal.querySelector(".btn--success");
const addMovieCancelBtn = addMovieModal.querySelector(".btn--passive");
const addMovieInputTitle = addMovieModal.querySelector("#title");
const addMovieInputUrl = addMovieModal.querySelector("#image-url");
const addMovieInputRating = addMovieModal.querySelector("#rating");
const entryTextSection = document.getElementById("entry-text");
const movieList = document.getElementById("movie-list");
const deleteMovieModal = document.getElementById("delete-modal");
const confirmDeleteBtn = deleteMovieModal.querySelector(".btn--danger");
const cancelDeleteBtn = deleteMovieModal.querySelector(".btn--passive");

const addedMovies = [];

function updateListUI() {
  if (addedMovies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
}

function cancelMovieDeletionModal() {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
}

function deleteMovieHandler(movieID) {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  confirmDeleteBtn.addEventListener("click", deleteMovie.bind(null, movieID)); // Won't work after clicking the cancel button more than on time, since we're adding too many event listeners to the same node.
  cancelDeleteBtn.addEventListener("click", cancelMovieDeletionModal);
}

function deleteMovie(movieID) {
  let movieIndex = 0;
  for (const movie of addedMovies) {
    if (movie.id === movieID) {
      break;
    }
    movieIndex++;
  }

  addedMovies.splice(movieIndex, 1);
  movieList.children[movieIndex].remove();
  backdropClickHandler();
  updateListUI();
}

function renderNewMovie(id, title, imageUrl, rating) {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating} / 5 stars!</p>
    </div>
    `;

  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  movieList.append(newMovieElement);
}

function closeMovieModal() {
  addMovieModal.classList.remove("visible");
}

function showMovieModal() {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
}

function toggleBackdrop() {
  backdrop.classList.toggle("visible");
}

function clearMovieInputs() {
  addMovieInputTitle.value = "";
  addMovieInputUrl.value = "";
  addMovieInputRating.value = "";
}

function cancelMovieHandler() {
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
}

function addMovieHandler() {
  const movieTitle = addMovieInputTitle.value;
  const imageUrl = addMovieInputUrl.value;
  const rating = addMovieInputRating.value;

  if (
    movieTitle.trim() === "" ||
    imageUrl.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Please enter valid values - (rating between 1 and 5)");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: movieTitle,
    image: imageUrl,
    rating: rating,
  };

  addedMovies.push(newMovie);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovie(newMovie.id, newMovie.title, newMovie.image, newMovie.rating);
  updateListUI();
}

function backdropClickHandler() {
  closeMovieModal();
  cancelMovieDeletionModal();
}

addMovieBtn.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
addMovieCancelBtn.addEventListener("click", cancelMovieHandler);
addMovieAddBtn.addEventListener("click", addMovieHandler);
