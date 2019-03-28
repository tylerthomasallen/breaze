import React, { Component } from 'react';
import { debounce } from 'lodash';

class Scroll extends Component {
  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }
  
  handleScroll(e) {
    const { currentTarget: { innerHeight, scrollY, document: { body: { scrollHeight } } }  } = e;

    if (innerHeight != undefined && scrollY != undefined && scrollHeight != undefined) {
      const buffer = innerHeight;
      if ((innerHeight + scrollY + buffer) >= scrollHeight) {
        const debouncedFunction = debounce(this.props.performAction, 1000);
        debouncedFunction()
      }

    }
    
  }

  render() {
    return (
      <div className="parent">
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;