import React, { Component } from 'react';
import Buttons from '../buttons/giph_buttons';
import GiphLoading from '../loading/giph_loading';
import PropTypes from 'prop-types';
import { Link , withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFavorite, deleteFavorite } from '../../actions/giph_actions'
import isDoubleTap from "./isDoubleTap"

class Giph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      loadingClass: 'giph-loading'
    }

    this.finishLoading = this.finishLoading.bind(this);
    this.handleLoadingFromCache = this.handleLoadingFromCache.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
    this.renderGiph = this.renderGiph.bind(this);
  }

  async componentDidMount() {
    this.handleLoadingFromCache();
  }

  async finishLoading() {
    await this.setState( { loading: false } )
    await this.setState( { loadingClass: "" } )
  }

  handleLoadingFromCache() {
    const { loading } = this.state;
    const { giph: { url } } = this.props;

    if (loading === true) {
      const giphElement = document.getElementById(url)
      
      if (giphElement !== null && giphElement.complete === true) {
        this.finishLoading()
      }
    }
  }

  async handleFavorite(event) {
    const { user, giph, favorites, addFavorite, deleteFavorite } = this.props;
      
    if (isDoubleTap(event)) {
      if (user.isAuthenticated === true) {
        
        if (favorites[giph.id]) {
          await deleteFavorite(user, giph)
        } else {
          await addFavorite(user, giph)
        }
      } else {
        this.props.history.push('/signup')
      }
    }
    
  }

  renderGiph() {
    const { giph, user } = this.props;
    const { loading, loadingClass } = this.state;
      return(
        <div>
          <GiphLoading loading={loading} />
          <img 
            id={giph.url}
            onLoad={this.finishLoading} 
            src={giph.url} 
            className={`giph ${loadingClass}`} alt="giph" 
            // onDoubleClick={this.handleFavorite}
            onClick={this.handleFavorite}
            // onTouchStart={this.handleFavorite}
            />
        </div>
      )
  }

  render() {
    const { giph } = this.props;
    const { loading, loadingClass } = this.state;
    
    return(
      <div className="giphs" key={giph.id}>
        
        <div className="giph-section">
          <img src={giph.avatar} className="avatar" alt="" />
          <h1 className="username">{giph.username}</h1>
        </div>

        {this.renderGiph()}

        {/* <Link to={`/giph/${giph.id}`}>
          <GiphLoading loading={loading} />
          <img 
            id={giph.url}
            onLoad={this.finishLoading} 
            src={giph.url} 
            className={`giph ${loadingClass}`} alt="giph" 
            onDoubleClick={this.handleFavorite}
            />
        </Link> */}
        

        <div className="giph-section">
          <Buttons giph={giph}/>
        </div>

        <Link to={`/giph/${giph.id}`} className="giph-section">
          <h1 className="username">{giph.username}</h1>
          <span className="title">{giph.title}</span>
        </Link>
            
      </div>
    )
  }
}

Giph.propTypes = {
  giph: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  favorites: PropTypes.object.isRequired,
  addFavorite: PropTypes.func.isRequired,
  deleteFavorite: PropTypes.func.isRequired
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Giph));

