const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {

  // Options object for GET request to github API
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'per_page': 100
    }
  };

  // Use the axios module to request repos for a specific
  // user from the github API

  axios.get(options.url, options.headers)
    .then((response) => {
      console.log('Successful GET from github API');
      callback(null, response);
    })
    .catch((err) => {
      console.log('Failed GET from github API: ', err);
      callback(err, null);
    });

}

module.exports.getReposByUsername = getReposByUsername;