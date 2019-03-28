import React, { Component } from 'react';

class ShareButton extends Component {
  constructor(props) {
    super(props)

    this.handleShare = this.handleShare.bind(this);

  }

  async handleShare() {
    const { url } = this.props;

    const result = await navigator.permissions.query( { name: "clipboard-write" } );

    if (result.state == "granted" || result.state == "prompt") {
      const res = await navigator.clipboard.writeText(url);
    }
  }

  renderShareSuccess() {
    
  }

  render() {
    return (
      <div className="share-button">
        <i className="fas fa-share-square" onClick={this.handleShare} />
      </div>
    )
  }
}

export default ShareButton;