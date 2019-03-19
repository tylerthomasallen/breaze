import React, { Component } from 'react';
import Title from '../title';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearErrors } from '../../actions/user_actions';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessages: []
    }

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.formValidation = this.formValidation.bind(this);
  }

  update(field) {
    return ({ currentTarget: { value } }) => this.setState({[field]: value})
  }

  handleKeyPress( { key } ) {
    if (key === 'Enter') {
      this.handleSubmit();
    }
  }

  async handleSubmit() {
    const { submit, clearErrors } = this.props;
    const { email, password } = this.state;

    if (await this.formValidation() === true) {
      await clearErrors()
      submit( { email, password } )
    }

  }

  async formValidation() {
    const { email, password } = this.state;
    const errors = [];
    let valid = true;

    if (email.length <= 0 || !email.includes('@')) {
      errors.push('The email field is required and must be valid!')
      valid = false;
    }

    if (password.length <= 7) {
      errors.push('The password field is required and must contain at least eight characters!')
      valid = false;
    }

    await this.setState( { errorMessages: errors } )
    return valid;

  }

  render() {
    const { email, password, errorMessages } = this.state;
    const { title, type, errors } = this.props;

    return(
      <div className="parent user-parent" onKeyPress={this.handleKeyPress}>

        <Link to={'/trending'}className="user-back-button">
          <i className="fas fa-arrow-left"></i>
        </Link>
        
        <div className="user-title">
          <Title text={'Giphagram'} styles={ { color: "white", fontWeight: 'bold' } }/>
          <Title text={title} styles={{ 
            color: 'white', 
            fontFamily: 'Lilita One',
            fontWeight: '800',
            fontSize: '48px',
            margin: '20px'
            } } />
        </div>


       
        <div className="user-form" onSubmit={this.submit}>
          <input type="text" placeholder="Email" required value={email} onChange={this.update("email")} />
          <input type="password" placeholder="Password" required value={password} onChange={this.update("password")} />
          <div className="submit" onClick={this.handleSubmit}>{type}</div>
        </div>

        <div className="error-messages">
          {errorMessages.map((error, idx)=> {
            return <p className="errors" key={`${error}-${idx}`}>{error}</p>
          })}
          {Object.values(errors).map((error, idx) => {
            return <p className="errors" key={`${error}-${idx}`}>{error}</p>
          })}
        </div>

        
      </div>
    )
  }
}

const mapStateToProps = ( { errors } ) => {
  return {
    errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)