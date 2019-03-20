import React, { Component } from 'react';
import Buttons from './buttons';
import GiphLoading from '../loading/giph_loading';
import PropTypes from 'prop-types';

class Giph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      loadingClass: 'giph-loading'
    }

    this.finishLoading = this.finishLoading.bind(this);
    
  }

  async finishLoading() {
    await this.setState( { loading: false } )
    await this.setState( { loadingClass: "" } )
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
        <img src={giph.url} className={`giph ${loadingClass}`} alt="giph" onLoad={this.finishLoading} />
        

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