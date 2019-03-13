import React from 'react';
import { connect } from 'react-redux';
import Title from '../title';
import Giphs from '../giphs';


const Trending = ( { trending } ) => {
  return(
    <div className="parent">
      <Title text="Trending" />
      <Giphs giphs={trending}/>
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