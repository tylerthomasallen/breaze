import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../actions/giph_actions'

class Buttons extends Component {
  constructor(props) {
    super(props)

    this.handleFavorite = this.handleFavorite.bind(this);
    this.handleHeart = this.handleHeart.bind(this);
  }

  async handleFavorite(e) {
    e.preventDefault();
    const { user, giph, favorites, addFavorite, deleteFavorite } = this.props;

    if (favorites[giph.id]) {
      debugger;
      await deleteFavorite(user, giph)
    } else {
      await addFavorite(user, giph)
    }
  }

  handleHeart() {
    const { giph, favorites } = this.props;
    const fullHeart = <i className="fas fa-heart" onClick={this.handleFavorite}/>
    const emptyHeart = <i className="far fa-heart" onClick={this.handleFavorite}/>
    
    if (favorites[giph.id]) {
      return fullHeart
    } else {
      return emptyHeart
    }
  }


  render() {
    const { user: { isAuthenticated } } = this.props;
    const emptyHeart = <i className="far fa-heart" onClick={this.handleFavorite}/>

    if (!isAuthenticated) {
      return(
        <Link to="/login" className="buttons-container">
          {emptyHeart}
        </Link>
      )
    } else {
      return(
        <div className="buttons-container">
          {this.handleHeart()}
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