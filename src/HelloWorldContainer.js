// HelloWorldContainer.js
import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';
import ModalContainer from './ModalContainer.js';
import {inject, observer} from 'mobx-react';

const HelloWorldContainer = inject('store')(observer(class HelloWorldContainer extends Component {
  render() {
    console.log(this.props.store.name)
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
}));

export default HelloWorldContainer;

HelloWorldContainer.propTypes = {
  name: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
  modalIsOpen: React.PropTypes.bool.isRequired
}
