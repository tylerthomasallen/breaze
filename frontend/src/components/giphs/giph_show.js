import React, { Component } from 'react';
import Giphs from './index';
import { connect } from 'react-redux';

class GiphShow extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      test: []
    }
  }

  render() {
   return <Giphs giphs={this.state.test} />
  }
}

const mapStateToProps = ( { giphs: { trending, searchResults, favorites } }, ownProps ) => {
  const { giphId } = ownProps.match.params;
  return {
    id: giphId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getTrending: (offset) => dispatch(getTrending(offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiphShow); 
