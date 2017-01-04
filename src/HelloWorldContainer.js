// HelloWorldContainer.js
import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';
import ModalContainer from './ModalContainer.js';

export default class HelloWorldContainer extends Component {
  render() {
    return (
      <div>
        <HelloWorld
          name={this.props.name}
          onClick={this.props.onClick}
        />
        <ModalContainer
          modalIsOpen={this.props.modalIsOpen}
          onSubmit={this.props.onSubmit}
          onCancel={this.props.onCancel}
        />
      </div>
    );
  }
}

HelloWorldContainer.propTypes = {
  name: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired
}
