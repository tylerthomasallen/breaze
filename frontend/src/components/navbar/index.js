import React from 'react';
import SidebarContainer from '../sidebar';
import Title from '../title';

const NavBar = () => {
  return(
    <div className="navbar-container">
      <SidebarContainer />
      <Title text="Giphagram" />
    </div>
  )
}

export default NavBar;