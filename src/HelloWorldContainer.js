// HelloWorldContainer.js
import React, { Component } from 'react';
import HelloWorld from './HelloWorld.js';

export default class HelloWorldContainer extends Component {
  constructor() {
    super();
    this.state = { name: '' };
  }

  componentDidMount() {
    this.getName();
  }

  getName() {
    // Imagine an ajax call to get name from server
    let name = 'Randall';
    this.setState({name});
  }

  render() {
    return (
      <HelloWorld name={this.state.name} />
    );
  }
}
