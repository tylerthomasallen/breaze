import React from 'react';
import { connect } from 'react-redux';
import { setLoading } from '../../actions/loading_actions';
import Giph from './giph';

const Giphs = ( { giphs, setLoading } ) => {
  
  if (giphs.length >= 1) {
    setLoading(true);
  }
  
  return(
    <div className="parent">
      
      {giphs.map((giph, idx) => {
        
        let last = false;
        if (idx === giphs.length - 1) {
          last = true;
        }

        return <Giph 
          giph={giph} 
          last={last} 
          setLoading={setLoading} 
          key={`${giph.id}-${idx}`}
          />
      })}

    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    setLoading: (bool) => dispatch(setLoading(bool))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Giphs)
