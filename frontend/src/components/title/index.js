import React from 'react';

const Title = ( { text, styles } ) => {
  const title = <h1>{text}</h1>
   
  return(
    <div className="title-container" style={ { ...styles } }>
      {title}
    </div>
  )
}

export default Title;