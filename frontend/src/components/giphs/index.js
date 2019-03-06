import React from 'react';
import './styles.scss';
import Buttons from '../favorites/buttons';

const Giphs = ({giphs}) => {
  return(
    <div className="parent">
      {giphs.map(giph => {
        return (
        <div className="giphs" key={giph.id}>
          <img src={giph.url} alt="giph"/>
          <Buttons giph={giph}/>
        </div>
        )
      })}
    </div>
  )
}

export default Giphs;