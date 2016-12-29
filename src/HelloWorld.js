// HelloWorld.js
import React, { Component } from 'react';

export default class HelloWorld extends Component {
  componentDidUpdate() {
    this.nameInput.value = '';
  }

  render() {
    return (
      <div className="container__main">
        <p className="App-intro">
          <span>Hello {this.props.name}!</span>
          <span style={{ marginLeft: '5px' }}>
            <a className='name-link' href='#' onClick={(e) => this.props.onClick(e)}>Edit</a>
          </span>
        </p>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
}
