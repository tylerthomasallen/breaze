import React from 'react';
import styles from './styles.scss';

const Giphs = ({giphs}) => {
  return(
    <div className="parent">
      {giphs.map(giph => {
        return <img src={giph.url} key={giph.id} className="giphs"/>
      })}
    </div>
  )
}

export default Giphs;