import React, { Component } from 'react';
import SidebarContent from './sidebar_content';
import { CSSTransitionGroup } from 'react-transition-group';

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
      return <SidebarContent closeSidebar={this.closeSidebar} key="sidebar-content"/>
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

        <CSSTransitionGroup
          transitionName="sidebar-background"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {this.renderSidebar()}
        </CSSTransitionGroup>

      </div>
    )
  }
}

export default SidebarContainer;