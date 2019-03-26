import React from 'react';
import PropTypes from 'prop-types';

const GiphLoading = ( { loading } ) => {
  if (!loading) {
    return null;
  } else {
    return(
      <div className="lds-css ng-scope">
        <div className="lds-bars">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    )
  }
}

GiphLoading.propTypes = ({
  loading: PropTypes.bool.isRequired
})

export default GiphLoading;
