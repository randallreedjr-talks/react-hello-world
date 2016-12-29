// HelloWorldContainer.js
import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';


export default class HelloWorldContainer extends Component {
  constructor() {
    super();
    this.state = { name: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Imagine an ajax call to get name from server
    let name = 'Randall';
    this.setState({name});
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    this.setState({name: nameInput.value});
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    this.setState({name: nameInput.value});
  }

  render() {
    return (
      <HelloWorld name={this.state.name} onSubmit={this.handleSubmit} />
    );
  }
}
