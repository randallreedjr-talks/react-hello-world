// HelloWorldContainer.js
import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';
<<<<<<< 4f165aeec7d114205999d56c846a41d91ad51dec
import ModalContainer from './ModalContainer.js';
=======
>>>>>>> Mock server response with user name

export default class HelloWorldContainer extends Component {
  constructor() {
    super();
<<<<<<< a03180b0e7d5336150bb0b6c164c3132349f3d90
    this.state = { name: '', modalIsOpen: false };
    // bind this to allow updating state
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleClick = this.handleClick.bind(this);
=======
    this.state = { name: 'World' };
    this.handleSubmit = this.handleSubmit.bind(this);
>>>>>>> Update name based on form input
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    this.setState({name: nameInput.value});
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    // Imagine an ajax call to update name to server
    this.setState({name: nameInput.value, modalIsOpen: false});
  }

  handleCancel() {
    this.setState({ modalIsOpen: false });
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  render() {
    return (
      <div>
        <HelloWorld
          name={this.state.name}
          onClick={this.handleClick}
        />
        <ModalContainer
          modalIsOpen={this.state.modalIsOpen}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
        />
      </div>
    );
  }
}
