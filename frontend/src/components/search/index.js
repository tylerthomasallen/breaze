import React, { Component } from 'react';
import { getSearch, clearSearch } from '../../actions/giph_actions';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Giphs from '../giphs';
import Title from '../title';
import Scroll from '../scroll';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      lastInput: ''
    }

    this.update = this.update.bind(this);
    this.handleSearch = debounce(this.handleSearch.bind(this), 500);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  update(field) {
    return ({ currentTarget: { value } }) => this.setState({[field]: value})
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
    }

  }

  render() {
    const { searchResults } = this.props;
    const { input } = this.state;
    
    return (
      <Scroll performAction={this.handleSearch}>
        <Title text="Search" />

        <div className="searchbar" onKeyPress={this.handleKeyPress}>
          <input type="text" placeholder="The world is waiting..." value={input} onChange={this.update("input")} />
          {/* <i class="fas fa-times-circle" /> */}
        </div>
        <Giphs giphs={searchResults}/>
      </Scroll>
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
    getSearch: (query, offset) => dispatch(getSearch(query, offset)),
    clearSearch: () => dispatch(clearSearch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);