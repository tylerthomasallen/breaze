import React from 'react';
import { connect } from 'react-redux';
import Giphs from '../giphs';
import Title from '../title';

const Trending = ( { trending } ) => {
  return(
    <div className="parent">
      <Giphs giphs={trending} title="Trending"/>
    </div>
  )
}

const mapStateToProps = ( { giphs: { trending } } ) => {
  return {
    trending
  }
}

export default connect(
  mapStateToProps
)(Trending); 