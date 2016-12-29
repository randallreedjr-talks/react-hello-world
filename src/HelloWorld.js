// HelloWorld.js
import React, { Component } from 'react';

export default class HelloWorld extends Component {
  render() {
    return (
      <p className="App-intro">
        Hello {this.props.name}!
      </p>
    );
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired
}
