import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

//Individual Repo which will go into RepoList component.
let Repo = (props) => {

  let fetchLanguages = (event) => {
    event.preventDefault();
    axios.post('/languages', { search: props.data.languages_url })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('Failed to post data. Error: ', err);
      });
  };

  let fetchCommits = (event) => {
    event.preventDefault();
    console.log(props.data.commits_url);
    axios.post('/commits', { search: props.data.commits_url.slice(0, -6) })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log('Failed to post data. Error: ', err);
      })
  }

  return (
    <div className='repo' onClick={fetchCommits}>
      <div className='repo-left'>
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <p>Last updated: {new Date(props.data.updated_at).toDateString()}</p>
      </div>
      <div className='repo-right'>
        <p>Stars: {props.data.stargazers_count}</p>
        <p>Forks: {props.data.forks_count}</p>
        <a href={props.data.html_url} target='_blank'>See the Repo</a>
      </div>
    </div>
  );
};

Repo.propTypes = {
  data: PropTypes.object.isRequired
}

export default Repo;