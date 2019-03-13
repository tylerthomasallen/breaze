import React, { Component } from 'react';
import { getSearch } from '../../actions/giph_actions';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Giphs from '../giphs';
import Title from '../title';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
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
    const { input } = this.state;
    const { getSearch, searchResults } = this.props;
    const offset = searchResults.length;

    if (input.length >= 2) {
      await getSearch(input, offset);
      this.setState( { input: ''} )
    }
  }

  render() {
    const { searchResults } = this.props;
    const { input } = this.state;
    
    return (
      <div className="parent">
        <Title text="Search" />

        <div className="searchbar" onKeyPress={this.handleKeyPress}>
          <input type="text" placeholder="The world is waiting..." value={input} onChange={this.update("input")} />
          {/* <i class="fas fa-times-circle" /> */}
        </div>
        <Giphs giphs={searchResults}/>
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