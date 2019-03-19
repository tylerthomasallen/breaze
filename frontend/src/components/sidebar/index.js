import React, { Component } from 'react';
import SidebarContent from './sidebar_content';


class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };

    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.renderSidebar = this.renderSidebar.bind(this);
  }

  async openSidebar() {
    await this.setState( { sidebarOpen: true } );
  }

  async closeSidebar() {
    await this.setState( { sidebarOpen: false } )
  }

  renderSidebar() {
    const { sidebarOpen } = this.state;

    if (sidebarOpen) {
      return <SidebarContent closeSidebar={this.closeSidebar}/>
    } else {
      return null;
    }
  }

  render() {
    return(
      <div className="sidebar">
        <div className="menu-button">
          <i className="fas fa-bars" onClick={this.openSidebar} />
        </div>

        {this.renderSidebar()}
      </div>
    )
  }
}

export default SidebarContainer;