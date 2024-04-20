

const axios = require('axios');

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URI}`,
  headers: {
    'Content-Type': 'application/json', 
  },
});

module.exports = instance;
