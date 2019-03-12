import React from 'react';
import Buttons from '../favorites/buttons';

const Giphs = ({giphs}) => {
  debugger;
  return(
    <div className="parent">
      {giphs.map(giph => {
        return (
        <div className="giphs" key={giph.id}>
          
          <div className="giph-section">
            <img src={giph.avatar} className="avatar" />
            <h1 className="username">{giph.username}</h1>
          </div>

          <img src={giph.url} alt="giph"/>

          <div className="giph-section">
            <h1 className="username">{giph.username}</h1>
            <span className="title">{giph.title}</span>
            <Buttons giph={giph}/>
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Giphs;