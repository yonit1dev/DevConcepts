const movies = [];

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movieList = document.getElementById("movie-list");

function clearInputs(...inputs) {
  for (let input of inputs) {
    input.value = "";
  }
}

function renderMovie(movie) {
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  const movieEl = document.createElement("li");
  movieEl.textContent = movie.info.title;
  movieList.append(movieEl);
}

function addMovieHandler() {
  const movieTitle = document.getElementById("title");
  const extraName = document.getElementById("extra-name");
  const extraValue = document.getElementById("extra-value");

  const newMovie = {
    id: (Math.random() * 10).toFixed(1),
    info: {
      title: movieTitle.value,
      [extraName.value]: extraValue.value,
    },
  };

  movies.push(newMovie);
  renderMovie(newMovie);

  clearInputs(movieTitle, extraName, extraValue);
}

addMovieBtn.addEventListener("click", addMovieHandler);
