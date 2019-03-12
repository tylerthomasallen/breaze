import React from 'react';
import { connect } from 'react-redux';

const Loading = ({loading}) => {
  if (loading) {
    return(
      <div className="loading">
        <div className="lds-spinner">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  } else {
    return null;
  }
}

const mapStateToProps = ({ loading }) => {
  return {
    loading
  };
};

export default connect(
  mapStateToProps
)(Loading);