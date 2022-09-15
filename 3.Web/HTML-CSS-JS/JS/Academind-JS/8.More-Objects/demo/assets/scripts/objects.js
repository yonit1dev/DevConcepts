const movies = [];

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movieList = document.getElementById("movie-list");

function clearInputs(...inputs) {
  for (let input of inputs) {
    input.value = "";
  }
}

function renderMovie(moviesList, movie) {
  if (moviesList.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  const movieEl = document.createElement("li");
  const { info } = movie;
  let text = info.title + "-";

  for (const key in info) {
    if (key !== "title") {
      text += `${key} : ${info[key]}`;
    }
  }
  movieEl.textContent = text;
  movieList.append(movieEl);
}

function addMovieHandler() {
  const movieTitle = document.getElementById("title");
  const extraName = document.getElementById("extra-name");
  const extraValue = document.getElementById("extra-value");

  const newMovie = {
    id: (Math.random() * 10).toFixed(1).toString(),
    info: {
      title: movieTitle.value,
      [extraName.value]: extraValue.value,
    },
  };

  movies.push(newMovie);
  renderMovie(movies, newMovie);

  clearInputs(movieTitle, extraName, extraValue);
}

function searchMovieHandler() {
  const filterText = document.getElementById("filter-title").value;
  let searchResults = [];

  if (filterText) {
    searchResults = movies.filter((movie) =>
      movie.info.title.includes(filterText)
    );
  } else {
    searchResults = movies;
  }

  movieList.innerHTML = "";
  for (const foundMovie of searchResults) {
    renderMovie(searchResults, foundMovie);
  }
}

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
