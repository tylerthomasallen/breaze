import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user_actions';

const SidebarUser = ( { isAuthenticated, closeSidebar, logout } ) => {
  
  if (!isAuthenticated) {
    return(
      <div className="user-auth">
        <Link to={'/signup'} onClick={closeSidebar}>
          SIGN UP
        </Link>

        <Link to={'/login'} onClick={closeSidebar}>
          LOGIN
        </Link>
      </div>
    )
  } else {
    return(
      <div className="user-auth">
        <a onClick={logout}>
          LOGOUT
        </a>
      </div>
    )
  }
}

const mapStateToProps = ( { user: { isAuthenticated } } ) => {
  return {
    isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarUser)

