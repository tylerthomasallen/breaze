import React, { Component } from 'react';
import { getSearch } from '../../actions/giph_actions';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Giphs from '../giphs';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

    this.update = this.update.bind(this);
    this.search = debounce(this.search.bind(this), 500);
  }

  update(field) {
    return ({ currentTarget: { value } }) => this.setState({[field]: value})
  }

  // async componentDidMount() {
  //   this.props.getSearch('test');
  // }

  search() {
    const { input } = this.state;
    const { getSearch } = this.props;
    if (input.length >= 2) {
      getSearch(input);
    }
  }

  render() {
    const { searchResults } = this.props;
    const { input } = this.state;
    
    return (
      <div className="parent">
        <input type="text" placeholder="Search" value={input} onChange={this.update("input")} />
        <span onClick={this.search}>Search!</span>
        <Giphs giphs={searchResults} />
      </div>
    )
  }
}

const mapStateToProps = ( { giphs: { searchResults }} ) => {
  return {
    searchResults
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearch: (query) => dispatch(getSearch(query))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);