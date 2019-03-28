import React from 'react';
import { connect } from 'react-redux';
import Giphs from '../giphs';
import Title from '../title';
import PropTypes from 'prop-types';

const Favorites = ( { favorites } ) => {

  return(
    <div className="parent">
      <Title text={'Favorites'} />
      <Giphs giphs={Object.values(favorites)} />
    </div>
  )
}

const mapStateToProps = ( { giphs: { favorites } }  ) => {
  return {
    favorites
  }
}

Favorites.propTypes = ({
  favorites: PropTypes.object.isRequired
})

export default connect(mapStateToProps)(Favorites);