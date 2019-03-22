import React, { Component } from 'react';
import Buttons from './buttons';
import GiphLoading from '../loading/giph_loading';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Giph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      loadingClass: 'giph-loading'
    }

    this.finishLoading = this.finishLoading.bind(this);
    this.handleLoadingFromCache = this.handleLoadingFromCache.bind(this);
  }

  componentDidMount() {
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

  render() {
    const { giph } = this.props;
    const { loading, loadingClass } = this.state;
    
    return(
      <div className="giphs" key={giph.id}>
        
        <div className="giph-section">
          <img src={giph.avatar} className="avatar" alt="" />
          <h1 className="username">{giph.username}</h1>
        </div>


        <GiphLoading loading={loading} />
        <img 
          id={giph.url}
          onLoad={this.finishLoading} 
          src={giph.url} 
          className={`giph ${loadingClass}`} alt="giph" 
          />
        

        <div className="giph-section">
          <Buttons giph={giph}/>
        </div>
            
        <div className="giph-section">
          <h1 className="username">{giph.username}</h1>
          <span className="title">{giph.title}</span>
        </div>
      </div>
    )
  }
}

Giph.propTypes = {
  giph: PropTypes.object,
}

export default Giph;