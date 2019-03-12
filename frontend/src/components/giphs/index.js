import React from 'react';
import Buttons from '../favorites/buttons';

const Giphs = ({giphs}) => {
  debugger;
  return(
    <div className="giph-parent">
      {giphs.map(giph => {
        return (
        <div className="giphs" key={giph.id}>
          
          <div className="giph-section">
            <img src={giph.avatar} className="avatar" />
            <h1 className="username">{giph.username}</h1>
          </div>

          <img src={giph.url} className="giph" alt="giph"/>

          <div className="giph-section">
            <Buttons giph={giph}/>
          </div>
          
          <div className="giph-section">
            <h1 className="username">{giph.username}</h1>
            <span className="title">{giph.title}</span>
          </div>

        </div>
        )
      })}
    </div>
  )
}

export default Giphs;