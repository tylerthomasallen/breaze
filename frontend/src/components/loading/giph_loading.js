import React from 'react';

const GiphLoading = ( { loading } ) => {
  
  if (!loading) {
    
    return null
  
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

export default GiphLoading;
