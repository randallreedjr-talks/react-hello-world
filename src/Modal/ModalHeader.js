import React, { Component } from 'react';

export default class ModalHeader extends Component {
  render() {
    return (
      <div className="Modal__header">
        <h4 className="Modal__header__text">{this.props.text}</h4>
      </div>
    )
  }
}

ModalHeader.propTypes = {
  text: React.PropTypes.string.isRequired
}
