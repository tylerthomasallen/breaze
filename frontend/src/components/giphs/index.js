import React from 'react';
import Giph from './giph';

const Giphs = ( { giphs } ) => {
  
  return(
    <div className="parent">
      {giphs.map((giph, idx) => {
        return <Giph 
          giph={giph}
          key={`${giph.id}-${idx}`}
          />
      })}
    </div>
  )
}

export default Giphs;