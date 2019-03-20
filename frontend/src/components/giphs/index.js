import React from 'react';
import { connect } from 'react-redux';
import { setLoading } from '../../actions/loading_actions';
import Giph from './giph';

const Giphs = ( { giphs } ) => {
  
  return(
    <div className="parent">
      
      {giphs.map((giph, idx) => {
        
        let last = false;
        if (idx === giphs.length - 1) {
          last = true;
        }

        return <Giph 
          giph={giph}
          key={`${giph.id}-${idx}`}
          />
      })}

    </div>
  )
}

export default Giphs;