import React, { Component } from 'react';

export default class ModalBody extends Component {
  render() {
    return (
      <div className="Modal__body">{this.props.children}</div>
    )
  }
}
