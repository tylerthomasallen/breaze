import React, { Component } from 'react';
import { connect } from 'react-redux';
import Scroll from '../scroll';
import Title from '../title';
import Giphs from '../giphs';
import { getTrending } from '../../actions/giph_actions';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

class Trending extends Component {
  constructor(props) {
    super(props);

    this.handleGetTrending = debounce(this.handleGetTrending.bind(this), 500);

  }

  handleGetTrending() {
    const { getTrending, trending } = this.props;
    const offset = Object.values(trending).length;
    getTrending(offset)
  }

  
  render() {
    const { trending } = this.props;
    return(
      <Scroll performAction={this.handleGetTrending}>
        <Title text="Trending" />
        <Giphs giphs={Object.values(trending)}/>
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

Trending.propTypes = ({
  trending: PropTypes.object.isRequired
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending); 