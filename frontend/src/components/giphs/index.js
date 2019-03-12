import React from 'react';
import Giph from './giph';
import Title from '../title';

const Giphs = ( { giphs, title } ) => {
  return(
    <div className="giph-parent">
      <Title text={title} />
      {giphs.map((giph, idx) => {
        return <Giph giph={giph} key={`${giph.id}-${idx}`}/>
      })}
    </div>
  )
}

export default Giphs;