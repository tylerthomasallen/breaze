import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/user_actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.update = this.update.bind(this);
    this.login = this.login.bind(this);
  }

  update(field) {
    return ({ currentTarget: { value } }) => this.setState({[field]: value})
  }

  login() {
    this.props.login( {...this.state} );
  }

  render() {
    const { email, password } = this.state;
    return(
      <div className="parent">
        <div className="login-form">
          <input type="text" placeholder="Email" required value={email} onChange={this.update("email")} />
          <input type="password" placeholder="Password" required value={password} onChange={this.update("password")} />
          <div className="submit" onClick={this.login}>
          Submit
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return({})
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)