// HelloWorld.js
import React, { Component } from 'react';

export default class HelloWorld extends Component {
  componentDidUpdate() {
    this.nameInput.value = '';
  }

  render() {
    let form, editLink;
    if (this.props.editMode) {
      form = (
        <form onSubmit={(e) => this.props.onSubmit(e, this.nameInput)}>
          <input
            className="name-input"
            type="text"
            placeholder="Enter your name"
            defaultValue={this.props.name}
            ref={(input) => this.nameInput = input}
          />
          <button className="name-submit" type="submit">Update</button>
        </form>
      )
    } else {
      editLink = (
        <span style={{ marginLeft: '5px' }}>
          <a className='name-link' href='#' onClick={(e) => this.props.onClick(e)}>Edit</a>
        </span>
      )
    }

    return (
      <div>
        { form }
        <p className="App-intro">
          <span>Hello {this.props.name}!</span>
          { editLink }
        </p>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  name: React.PropTypes.string.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired,
  editMode: React.PropTypes.bool.isRequired
}
