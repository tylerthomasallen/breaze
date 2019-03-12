import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from './sidebar_content';


class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };

    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    debugger;
  }

  openSidebar() {
    debugger;
    this.setState( { sidebarOpen: true } );
  }

  closeSidebar() {
    this.setState( { sidebarOpen: false } )
  }

  render() {
    const { sidebarOpen } = this.state;
    return(
      <div className="sidebar">
        <Sidebar
          sidebar={<SidebarContent closeSidebar={this.closeSidebar}/>}
          open={sidebarOpen}
          styles={ { sidebar: { background: "white", height: "100vh" }, root: { position: 'unset'} } }
          >
          <div className="menu-button">
            <i className="fas fa-bars" onClick={this.openSidebar} />
          </div>
          
        </Sidebar>
      </div>
    )
  }
}

export default SidebarContainer;