import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scroll from '../scroll';
import Title from '../title';
import Giphs from '../giphs';
import { getTrending } from '../../actions/giph_actions';
import { debounce } from 'lodash';

class Trending extends Component {
  constructor(props) {
    super(props);

    this.handleGetTrending = debounce(this.handleGetTrending.bind(this), 500);

  }

  handleGetTrending() {
    const { getTrending, trending } = this.props;
    const offset = trending.length;
    getTrending(offset)
    debugger;
  }

  
  render() {
    const { trending } = this.props;
    return(
      <Scroll performAction={this.handleGetTrending}>
        <Title text="Trending" />
        <Giphs giphs={trending}/>
      </Scroll>
    )
  }
}


const mapStateToProps = ( { giphs: { trending } } ) => {
  return {
    trending
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTrending: (offset) => dispatch(getTrending(offset))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending); 