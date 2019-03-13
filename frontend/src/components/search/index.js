import React, { Component } from 'react';
import { getSearch } from '../../actions/giph_actions';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import Giphs from '../giphs';
import Title from '../title';
import Scroll from '../scroll';

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
    debugger;

    if (input.length >= 2) {
      await getSearch(input, offset);
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
    getSearch: (query, offset) => dispatch(getSearch(query, offset))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);