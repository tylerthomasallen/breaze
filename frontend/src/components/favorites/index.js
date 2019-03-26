import React from 'react';
import { connect } from 'react-redux';
import Giphs from '../giphs';
import Title from '../title';
import PropTypes from 'prop-types';

const Favorites = ( { array } ) => {

  return(
    <div className="parent">
      <Title text={'Favorites'} />
      <Giphs giphs={array} />
    </div>
  )
}

const mapStateToProps = ( { giphs: { favorites: { array } } }  ) => {
  return {
    array
  }
}

Favorites.propTypes = ({
  array: PropTypes.array.isRequired
})

export default connect(mapStateToProps)(Favorites);