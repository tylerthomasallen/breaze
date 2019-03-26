import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../title';
import SidebarUser from './sidebar_user';
import PropTypes from 'prop-types';

const SidebarContent = ( { closeSidebar } ) => {

  return(
    <div className="sidebar-background">
    
      <div className="sidebar-container">
  
      <div className="upper-sidebar">
        <div className="sidebar-title">
          <Title text="Giphagram" />
          <i className="fas fa-times" onClick={closeSidebar}></i>
        </div>
  
        <Link to={'/trending'} onClick={closeSidebar}>
          <i className="fas fa-home" />
            Home
        </Link>
  
        <Link to={'/search'} onClick={closeSidebar}>
          <i className="fas fa-search" />
          Search
        </Link>
        
        <Link to={'/favorites'} onClick={closeSidebar}>
          <i className="fas fa-heart" />
          Favs
        </Link>
      </div>

        <div className="user-auth">
          <SidebarUser closeSidebar={closeSidebar} />
        </div>

      </div>

      <div className="sidebar-outer" onClick={closeSidebar}>
      </div>

    </div>
  )
}

SidebarContent.propTypes = ({
  closeSidebar: PropTypes.func.isRequired
})

export default SidebarContent;