import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../title';
import SidebarUser from './sidebar_user';

const SidebarContent = ( { closeSidebar } ) => {
  return(
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
  )
}

export default SidebarContent;