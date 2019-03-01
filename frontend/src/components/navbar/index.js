import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user_actions';

const NavBar = ({isAuthenticated, logout}) => {
  let userAction;
  
  if (isAuthenticated) {
    userAction = ( 
      <span className="logout" onClick={logout}>Logout</span>
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
      <Link to={'/'}>
        <i className="fas fa-home" />
      </Link>
      <Link to={'/search'}>
        <i className="fas fa-search" />
      </Link>
      <Link to={'/favorites'}>
        <i className="fas fa-heart" />
      </Link>
      {userAction}
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