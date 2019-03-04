import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }

    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(field) {
    return ({ currentTarget: { value } }) => this.setState({[field]: value})
  }

  submit() {
    this.props.submit( {...this.state} );
  }

  render() {
    const { email, password } = this.state;
    const { message, changeRoute } = this.props;

    return(
      <div className="parent">
        <div className="user-title">
          <h2>{message}</h2>
          {changeRoute}
        </div>
        <div className="user-form">
          <input type="text" placeholder="Email" required value={email} onChange={this.update("email")} />
          <input type="password" placeholder="Password" required value={password} onChange={this.update("password")} />
          <div className="submit" onClick={this.submit}>Submit</div>
        </div>
      </div>
    )
  }
}


export default UserForm