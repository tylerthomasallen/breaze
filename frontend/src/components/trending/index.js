import React from 'react';
import { connect } from 'react-redux';
import Giphs from '../giphs';

const Trending = ({trending}) => {
  return(
    <div className="parent">
      <Giphs giphs={trending} />
    </div>
  )
}

const mapStateToProps = ({ giphs: { trending }}) => {
  return {
    trending
  }
}

export default connect(
  mapStateToProps
)(Trending); 