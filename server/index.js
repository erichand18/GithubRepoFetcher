const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const getLanguagesByRepo = require('../helpers/github.js').getLanguagesByRepo;
const getCommitsByRepo = require('../helpers/github.js').getCommitsByRepo;
const getDataByUser = require('../helpers/github.js').getDataByUser;


let app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/user', (req, res) => {
  let username = req.body.search;

  getDataByUser(username, (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(response.data);
    }
  })
})
app.post('/repos', (req, res) => {
  let username = req.body.search;
  //Get Repo information to input to the database
  getReposByUsername(username, (err, response) => {
    if (err) {
      //failed to get repo data, so send 400 code with the error back to the client
      res.status(400).send(err);
    } else {
      //Successfully retrieved repos, send back to client with 200 status code
      res.status(200).send(response.data);
    }
  });
});

app.post('/languages', (req, res) => {
  let searchUrl = req.body.search;

  getLanguagesByRepo(searchUrl, (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(response.data);
    }
  });
});

app.post('/commits', (req, res) => {
  let searchUrl = req.body.search;

  getCommitsByRepo(searchUrl, (err, response) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(response.data);
    }
  });
});

const port = process.env.PORT || 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

