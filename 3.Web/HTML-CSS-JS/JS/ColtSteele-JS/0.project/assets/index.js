const baseUrl = "http://www.omdbapi.com/";
const input = document.querySelector("input");

const onSearch = (event) => {
  fetchData(baseUrl, {
    s: event.target.value,
  });
};

input.addEventListener("input", debounce(onSearch, 800));
