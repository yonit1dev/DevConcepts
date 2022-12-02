const baseUrl = "http://www.omdbapi.com/";

const fetchData = async (url, parameters) => {
  let options = {
    apikey: "12eefb62",
  };

  for (let param in parameters) {
    options[param] = parameters[param];
  }

  console.log(options);
  const response = await axios.get(url, {
    params: options,
  });

  return response;
};

const searchResult = fetchData(baseUrl, {
  s: "avengers",
  type: "movie",
});
searchResult
  .then((info) => console.log(info.data))
  .catch((error) => {
    console.log(error);
  });
