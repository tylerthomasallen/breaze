import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_TITLE } from '../../shared/constants';

const Title = ( { text } ) => {
  const title = <h1>{text}</h1>

  // if (text === MAIN_TITLE) {
  //   debugger;
  //   return(
  //     <Link to={'/trending'} className="title-container">
  //       {title}
  //     </Link>
  //   )
  // } else {
    
  return(
    <div className="title-container">
      {title}
    </div>
  )
}

export default Title;