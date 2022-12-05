const debounce = (cbFunction, delay = 1000) => {
  let timerID;
  return (...args) => {
    if (timerID) {
      clearTimeout(timerID);
    }
    timerID = setTimeout(() => {
      cbFunction.apply(null, args);
    }, delay);
  };
};

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
