import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

import HelloWorldContainer from './HelloWorldContainer.js';
import SidebarContainer from './SidebarContainer.js';
import Banner from './Banner.js';

const StoreContainer = inject('store')(observer(class StoreContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    // Imagine an ajax call to update name to server
    this.props.store.setName(nameInput.value);
    this.props.store.closeModal();
  }

  handleCancel() {
    this.props.store.closeModal();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.store.openModal();
  }

  render() {
    return(
      <div>
        <SidebarContainer />
        <Banner />
        <HelloWorldContainer
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}));

export default StoreContainer;
