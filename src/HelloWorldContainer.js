// HelloWorldContainer.js
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import HelloWorld from './HelloWorld.js';
import ModalContainer from './ModalContainer.js';

const HelloWorldContainer = inject('store')(observer(class HelloWorldContainer extends Component {
  getName() {
    return this.props.store.name || 'New User';
  }

  render() {
    return (
      <div>
        <HelloWorld
          name={this.getName()}
          onClick={this.props.onClick}
        />
        <ModalContainer
          onSubmit={this.props.onSubmit}
          onCancel={this.props.onCancel}
        />
      </div>
    );
  }
}));

export default HelloWorldContainer;

HelloWorldContainer.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
}
