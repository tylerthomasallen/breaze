import React, { Component } from 'react';
import Giphs from './index';
import Title from '../title';
import { connect } from 'react-redux';

class GiphShow extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      test: []
    }
  }

  render() {
    const { giph } = this.props; 
    debugger;
    return (
      <div className="parent">
        <Title text={giph.title} />
        <Giphs giphs={[giph]} />
      </div>
    )
  }
}

const mapStateToProps = ( { giphs: { trending, searchResults, favorites } }, ownProps ) => {
  const { giphId } = ownProps.match.params;
  const giph = trending[giphId] || searchResults[giphId] || favorites[giphId];

  return {
    id: giphId,
    giph
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getTrending: (offset) => dispatch(getTrending(offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphShow); 
