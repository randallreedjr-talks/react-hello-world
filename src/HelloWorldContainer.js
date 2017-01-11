// HelloWorldContainer.js
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import HelloWorld from './HelloWorld.js';
import ModalContainer from './ModalContainer.js';

const HelloWorldContainer = inject('store')(observer(class HelloWorldContainer extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  getName() {
    return this.props.store.name || 'New User';
  }

  handleClick(e) {
    e.preventDefault();
    this.props.store.openModal();
  }

  render() {
    return (
      <div>
        <HelloWorld
          name={this.getName()}
          onClick={this.handleClick}
        />
        <ModalContainer />
      </div>
    );
  }
}));

export default HelloWorldContainer;
