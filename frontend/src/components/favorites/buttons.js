import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite } from '../../actions/user_actions'

class Buttons extends Component {
  constructor(props) {
    super(props)

    this.addFavorite = this.addFavorite.bind(this);
  }

  addFavorite(e) {
    e.preventDefault();
    const { user, giph } = this.props;
    giph.isFavorite = true;
    this.props.addFavorite(user, giph)
  }

  render() {
    const { user: { isAuthenticated }, giph: { isFavorite } } = this.props;
    const heartClass = isFavorite === true ? "fas fa-heart" : "far fa-heart"

    if (!isAuthenticated) {
      return(
        <Link to="/login" className="buttons-container">
          <i className={heartClass}></i>
        </Link>
      )
    } else {
      return(
        <div className="buttons-container">
          <i className={heartClass} onClick={this.addFavorite}/>
        </div>
      )
    }
  }
}

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addFavorite: (user, giph) => dispatch(addFavorite(user, giph))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);