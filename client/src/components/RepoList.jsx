import React from 'react';
import Repo from './Repo.jsx';
import PropTypes from 'prop-types';

const RepoList = (props) => {

  //creates an array of repo components from the repos list passed form index.jsx
  let repoList = props.repos.map((repo, index) => {
    return <Repo key={index} data={repo} />
  });

  //sort the list of repos with most recently updated showing at the top of the list.
  repoList.sort((repo1, repo2) => {
    return Date.parse(repo2.props.data.updated_at) - Date.parse(repo1.props.data.updated_at);
  });

  return (
    <div className='list'>
      {repoList}
    </div>
  );
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object)
}

export default RepoList;