import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addFavorite, deleteFavorite } from '../../actions/giph_actions'
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import ShareButton from './share_button';

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
      await deleteFavorite(user, giph)
    } else {
      await addFavorite(user, giph)
    }
  }

  handleHeart() {
    const { giph, favorites } = this.props;
    const fullHeart = <i className="fas fa-heart full-heart" onClick={this.handleFavorite}/>
    const emptyHeart = <i className="far fa-heart" onClick={this.handleFavorite}/>
    
    if (favorites[giph.id]) {
      return(
        <CSSTransitionGroup
          transitionName="heart-transition"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {fullHeart}
        </CSSTransitionGroup>
      )
    } else {
      return emptyHeart
    }
  }


  render() {
    const { user: { isAuthenticated } } = this.props;
    const { giph: { url } } = this.props;

    if (!isAuthenticated) {
      return(
        <div className="buttons-container">
          
          <Link to="/login" className="buttons-container">
            <i className="far fa-heart"/>
          </Link>

          {/* <ShareButton url={url} /> */}
        </div>
      )
    } else {
      return(
        <div className="buttons-container">
          {this.handleHeart()}
          {/* <ShareButton url={url} /> */}
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

Buttons.propTypes = ({
  user: PropTypes.object.isRequired,
  favorites: PropTypes.object.isRequired
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);