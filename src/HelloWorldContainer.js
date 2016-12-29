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
    this.state = { name: '', modalIsOpen: false };
    // bind this to allow updating state
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getName();
  }

  getName() {
    // Imagine an ajax call to get name from server
    let name = 'Randall';
    this.setState({name});
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
