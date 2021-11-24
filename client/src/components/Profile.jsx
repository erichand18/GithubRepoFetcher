import React from 'react';
import PropTypes from 'prop-types';

let Profile = (props) => {
  return (
    <div className='profile'>
      <div className='profile-left'>
        <img src={props.data.avatar_url} />
      </div>
      <div className='profile-center'>
        <h1>{props.data.name}</h1>
        <h3>{props.data.login}</h3>
        <p>{props.data.bio}</p>
      </div>
      <div className='profile-right'>
        <a href={props.data.html_url} target='_blank'>See Profile</a>
        <a href={props.data.blog} target='_blank'>See Blog</a>
      </div>
    </div>
  )
}

export default Profile;