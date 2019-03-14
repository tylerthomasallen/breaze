import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../title';

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

        <Link to={'/signup'} onClick={closeSidebar}>
          SIGN UP
        </Link>

        <Link to={'/login'} onClick={closeSidebar}>
          LOGIN
        </Link>

      </div>

    </div>
  )
}

export default SidebarContent;