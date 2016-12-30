// HelloWorldContainer.js
import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';

export default class HelloWorldContainer extends Component {
  constructor() {
    super();
    this.state = { name: '', editMode: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Imagine an ajax call to get name from server
    let name = 'Randall';
    this.setState({name});
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    // Imagine an ajax call to update name to server
    this.setState({name: nameInput.value, editMode: false});
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ editMode: true });
  }

  render() {
    return (
      <HelloWorld
        name={this.state.name}
        onSubmit={this.handleSubmit}
        onClick={this.handleClick}
        editMode={this.state.editMode}
      />
    );
  }
}
