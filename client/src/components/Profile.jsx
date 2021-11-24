import React from 'react';
import PropTypes from 'prop-types';

let Profile = (props) => {
  return (
    <div className='profile'>
      <div className='profile-left'>
        <img src={props.data.avatar_url} />
      </div>
      <div className='profile-center'>

      </div>
      <div className='profile-right'>

      </div>
    </div>
  )
}

export default Profile;