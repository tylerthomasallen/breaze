import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../actions/giph_actions'

class Buttons extends Component {
  constructor(props) {
    super(props)

    this.handleFavorite = this.handleFavorite.bind(this);
  }

  async handleFavorite(e) {
    e.preventDefault();
    const { user, giph, favorites, addFavorite, deleteFavorite } = this.props;
    debugger;

    if (!favorites.includes(giph)) {
      debugger;
      giph.isFavorite = true;
      await addFavorite(user, giph)
    } else {
      debugger;
      giph.isFavorite = false;
      await deleteFavorite(user, giph)
    }
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
          <i className={heartClass} onClick={this.handleFavorite}/>
        </div>
      )
    }
  }
}

const mapStateToProps = ( { user, giphs: { favorites } } ) => {
  return {
    user,
    favorites
  }
}

const mapDispatchToProps = dispatch => {
  return{
    addFavorite: (user, giph) => dispatch(addFavorite(user, giph)),
    deleteFavorite: (user, giph) => dispatch(deleteFavorite(user, giph))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);