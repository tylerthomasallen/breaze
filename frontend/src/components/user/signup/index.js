import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../../actions/user_actions';
import UserForm from '../user_form';

const SignUp = ({signup}) => {
  const changeRoute = (
    <Link to="login">Login</Link>
  )
  return (
    <UserForm 
    submit={signup} 
    type={'Sign up'}
    message={'Already have an account?'} 
    title={'Get gihping'} 
    changeRoute={changeRoute} 
    />
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp)