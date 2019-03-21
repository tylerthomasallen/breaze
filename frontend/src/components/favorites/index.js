import React from 'react';
import { connect } from 'react-redux';
import Giphs from '../giphs';
import Title from '../title';

const Favorites = ( { favorites } ) => {
  debugger;

  return(
    <div className="parent">
      <Title text={'Favorites'} />
      <Giphs giphs={favorites.array} />
    </div>
  )
}

const mapStateToProps = ( { giphs: { favorites } }  ) => {
  return {
    favorites
  }
}

export default connect(mapStateToProps)(Favorites);