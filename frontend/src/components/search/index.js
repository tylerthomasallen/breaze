import React, { Component } from 'react';
import { getSearch, clearSearch } from '../../actions/giph_actions';
import { connect } from 'react-redux';
import Giphs from '../giphs';
import Title from '../title';
import Scroll from '../scroll';
import PropTypes from 'prop-types';

class Search extends Component {

  constructor(props) {
    super(props);

    const { searchTerm } = this.props;
    
    this.state = {
      input: searchTerm,
      lastInput: searchTerm
    }

    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  update(field) {
    return ( { currentTarget: { value } } ) => this.setState( { [field]: value } )
  }

  handleKeyPress( { key } ) {
    if (key === 'Enter') {
      this.handleSearch()
    }
  }

  async handleSearch() {
    const { input, lastInput } = this.state;
    const { getSearch, clearSearch, searchResults } = this.props;
    const offset = searchResults.length;
    
    if (lastInput !== input) {
      await clearSearch();
    }

    if (input.length >= 1) {
      await getSearch(input, offset);
      await this.setState( { lastInput: input } )
      document.getElementById('search-input').blur()
    }
  }

  async handleClear() {
    const { clearSearch } = this.props;

    await this.setState( { input: "" } );
    await this.setState( { lastInput: "" } );
    await clearSearch();
  }

  render() {
    const { searchResults } = this.props;
    const { input } = this.state;
    
    return (
      <Scroll performAction={this.handleSearch}>
        <Title text="Search" />

        <div className="searchbar" onKeyPress={this.handleKeyPress}>
          <i id="search-input" className="fas fa-search" onClick={this.handleSearch}/>
          <input type="text" placeholder="The world is waiting..." value={input} onChange={this.update("input")} />
          <i className="fas fa-times-circle" onClick={this.handleClear}/>
        </div>
        <Giphs giphs={searchResults}/>
      </Scroll>
    )
  }
}

const mapStateToProps = ( { giphs: { searchResults, searchTerm } } ) => {
  return {
    searchResults,
    searchTerm
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearch: (query, offset) => dispatch(getSearch(query, offset)),
    clearSearch: () => dispatch(clearSearch())
  }
}

Search.propTypes = {
  searchResults: PropTypes.array,
  searchTerm: PropTypes.string,
  getSearch: PropTypes.func,
  clearSearch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);