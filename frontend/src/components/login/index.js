import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/user_actions';
import UserForm from './user_form';
import { Link } from 'react-router-dom';

const Login = ({login}) => {
  const changeRoute = (
    <Link to="signup">Sign Up</Link>
  )
  return <UserForm submit={login} message={'New to Giphys?'} changeRoute={changeRoute} />
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Login)