// StoreContainer.js
import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

import HelloWorldContainer from './HelloWorldContainer.js';
import SidebarContainer from './SidebarContainer.js';
import Banner from './Banner.js';

const StoreContainer = inject('store')(observer(class StoreContainer extends Component {
  render() {
    return(
      <div>
        <SidebarContainer />
        <Banner />
        <HelloWorldContainer/>
      </div>
    )
  }
}));

export default StoreContainer;
