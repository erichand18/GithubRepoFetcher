const axios = require('axios');
const config = require('../config.js');

let getDataByUser = (username, callback) => {
  // Options object for GET request to github API
  let options = {
    url: `https://api.github.com/users/${username}`,
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
      console.log('Successful GET for user data from github API');
      callback(null, response);
    })
    .catch((err) => {
      console.log('Failed to GET user data from github API: ', err);
      callback(err, null);
    });
};

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

};

let getLanguagesByRepo = (search, callback) => {
  // Options object for GET request to github API

  let options = {
    url: search,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'per_page': 100
    }
  };

  // Use the axios module to request the languages for a 
  // specific repo from the github API

  axios.get(options.url, options.headers)
    .then((response) => {
      console.log('Successful languages GET from github API');
      callback(null, response);
    })
    .catch((err) => {
      console.log('Failed to GET languages from github API');
      callback(err, null);
    });
};

let getCommitsByRepo = (search, callback) => {
  // Options object for GET request to github API

  let options = {
    url: search,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`,
      'per_page': 100
    }
  };

  // Use the axios module to request the languages for a 
  // specific repo from the github API

  axios.get(options.url, options.headers)
    .then((response) => {
      console.log('Successful commits GET from github API');
      callback(null, response);
    })
    .catch((err) => {
      console.log('Failed to GET commits from github API');
      callback(err, null);
    });
}

module.exports.getDataByUser = getDataByUser;
module.exports.getReposByUsername = getReposByUsername;
module.exports.getLanguagesByRepo = getLanguagesByRepo;
module.exports.getCommitsByRepo = getCommitsByRepo;
