import React from 'react';
import PropTypes from 'prop-types';
//Individual Repo which will go into RepoList component.
let Repo = (props) => {
  return (
    <div className='repo'>
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