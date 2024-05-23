const axios = require('axios');

const instance = axios.create({
  // baseURL: `${process.env.REACT_APP_BACKEND_URI}`,
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json', 
  },
});

module.exports = instance;