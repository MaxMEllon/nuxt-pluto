module.exports = {
  request: {
    path: "/agreedsample",
    method: "GET",
  },
  response: {
    body: {
      results: {
        text: "{:text}",
      },
    },
    values: {
      text: "Hello world",
    },
  },
};
