// SidebarContainer.js
import React, { Component } from 'react'
import {inject, observer} from 'mobx-react';

import Sidebar from './Sidebar';

const SidebarContainer = inject('store')(observer(class SidebarContainer extends Component {
  getName() {
    return this.props.store.name || 'New User';
  }

  render() {
    return (
      <Sidebar name={this.getName()} />
    )
  }
}));

export default SidebarContainer;
