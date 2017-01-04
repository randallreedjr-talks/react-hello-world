import React, { Component } from 'react';

export default class ModalFooter extends Component {
  render() {
    return (
      <div className="Modal__footer">{this.props.children}</div>
    )
  }
}
