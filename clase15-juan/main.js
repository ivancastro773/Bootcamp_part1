const axios = require('axios');

const starWarsHTTP = axios.create({
    baseURL: 'https://swapi.dev/api/'
  });

  const numId = {
    params: {
      id: 1
    }
  };

  starWarsHTTP.get('people',numId)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));

  