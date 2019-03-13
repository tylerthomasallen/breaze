import React from 'react';
import Buttons from '../favorites/buttons';

const Giph = ( { giph, last, setLoading } ) => {
  
  let img;
  if (last === true) {
    img = <img src={giph.url} className="giph" alt="giph" onLoad={() => setLoading(false)}/>
  } else {
    img = <img src={giph.url} className="giph" alt="giph"/>
  }

  return(
    <div className="giphs" key={giph.id}>
      
      <div className="giph-section">
        <img src={giph.avatar} className="avatar" />
        <h1 className="username">{giph.username}</h1>
      </div>

      {img}

      <div className="giph-section">
        <Buttons giph={giph}/>
      </div>
          
      <div className="giph-section">
        <h1 className="username">{giph.username}</h1>
        <span className="title">{giph.title}</span>
      </div>
    </div>
  )
}

export default Giph;