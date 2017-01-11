import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

import HelloWorldContainer from './HelloWorldContainer.js';
import Sidebar from './Sidebar.js';
import Banner from './Banner.js';

const StoreContainer = inject('store')(observer(class StoreContainer extends Component {
  constructor() {
    super();
    this.state = {
      nameSet: false,
      modalIsOpen: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Imagine an ajax call to get name from server
    let name = '' || 'New User';
    // this.setState({name});
    this.props.store.setName(name);
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    // Imagine an ajax call to update name to server
    this.props.store.setName(nameInput.value);
    this.setState({
      // name: nameInput.value,
      nameSet: true,
      modalIsOpen: false
    });
  }

  handleCancel() {
    this.setState({ modalIsOpen: false });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  render() {
    return(
      <div>
        <Sidebar name={this.props.store.name}/>
        <Banner nameSet={this.state.nameSet}/>
        <HelloWorldContainer
          name={this.props.store.name}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
          onClick={this.handleClick}
          modalIsOpen={this.state.modalIsOpen}
        />
      </div>
    )
  }
}));

export default StoreContainer;
