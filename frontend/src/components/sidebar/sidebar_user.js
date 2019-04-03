import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user_actions';
import PropTypes from 'prop-types';

const SidebarUser = ( { isAuthenticated, closeSidebar, logout } ) => {
  
  if (!isAuthenticated) {
    return(
      <div className="user-auth-content">
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
      <div className="user-auth-content">
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

SidebarUser.propTypes = ({
  isAuthenticated: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarUser)

