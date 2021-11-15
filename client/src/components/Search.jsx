import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  //search function passed down from index.jsx. This search takes the
  //username entered by the user and gets the list of repos for that user.
  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className='search'>
        <input value={this.state.terms} onChange={this.onChange.bind(this)} placeholder="Github Username" />
        <button onClick={this.search.bind(this)}> Add Repos </button>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;