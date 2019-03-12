import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user_actions';
import SidebarContainer from '../sidebar';
import Title from '../title';

const NavBar = ({isAuthenticated, logout}) => {
  let userAction;
  
  if (isAuthenticated) {
    userAction = (
      <a onClick={logout}>
        <span>Logout</span>
      </a> 
    );
  } else {
    userAction = ( 
      <Link to={'/login'}>
        <span>Login</span>
      </Link>
    );
  }
  
  return(
    <div className="navbar-container">
      <SidebarContainer />
      <Title text="Giphagram" />
    </div>
  )
}

const mapStateToProps = ({ user: { isAuthenticated } }) => {
  return {
    isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);