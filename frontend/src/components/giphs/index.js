import React from 'react';
import Giph from './giph';
import Title from '../title';

const Giphs = ( { giphs, title } ) => {
  return(
    <div className="giph-parent">
      <Title text={title} />
      {giphs.map(giph => {
        return <Giph giph={giph} />
      })}
    </div>
  )
}

export default Giphs;