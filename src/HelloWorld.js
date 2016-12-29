// HelloWorld.js
import React, { Component } from 'react';

export default class HelloWorld extends Component {
  componentDidUpdate() {
    this.nameInput.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.onSubmit(e, this.nameInput)}>
          <input
            className="name-input"
            type="text"
            placeholder="Enter your name"
            ref={(input) => this.nameInput = input}
          />
          <button className="name-submit" type="submit">Update</button>
        </form>
        <p className="App-intro">
          Hello {this.props.name}!
        </p>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired
}
