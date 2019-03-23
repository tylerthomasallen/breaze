import React, { Component } from 'react';

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
    
    if ((innerHeight + scrollY + 1000) >= scrollHeight) {
      this.props.performAction();
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