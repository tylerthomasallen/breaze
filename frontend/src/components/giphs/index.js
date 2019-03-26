import React from 'react';
import Giph from './giph';
import PropTypes from 'prop-types';

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

Giphs.propTypes = ({
  giphs: PropTypes.array.isRequired
})

export default Giphs;