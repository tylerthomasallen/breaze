import React from 'react';
import { connect } from 'react-redux';
import Giphs from '../giphs';

const Favorites = ({user}) => {
  return(
    <div className="parent">
      <Giphs giphs={user.favorites} />
    </div>
  )
}

const mapStateToProps = ( { user} ) => {
  return {
    user
  }
}

export default connect(mapStateToProps)(Favorites);