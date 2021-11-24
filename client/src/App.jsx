import React from 'react';
import axios from 'axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Profile from './components/Profile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      repos: []
    }

  }
  //takes the user-entered github username and makes a GET request to the
  //github API. Response is list of that user's repos or an error.
  search(username) {
    axios.post('/repos', { search: username })
      .then((response) => {
        this.setState({ repos: response.data })
      })
      .catch((err) => {
        console.log('Failed to post data for repos. Error: ', err);
      });

    axios.post('/user', { search: username })
      .then((response) => {
        console.log(response.data);
        this.setState({ userData: response.data });
      })
      .catch((err) => {
        console.log('Failed to post data for user. Error: ', err);
      });
  }

  render() {
    return (
      <div className='main-page'>
        <div className='title'>
          <h1>Github Repo Fetcher</h1>
        </div>
        <Search onSearch={this.search.bind(this)} />
        {this.state.userData.name ? <Profile data={this.state.userData} /> : null}
        <div className 'main-page-bottom'>
        <Charts data={this.state.repos} />
        <RepoList repos={this.state.repos} />
      </div>
      </div >
    );
  }
}

export default App;

