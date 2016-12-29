// App.js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld.js';

import HelloWorldContainer from './HelloWorldContainer.js';
import Sidebar from './Sidebar.js';
import Banner from './Banner.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
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
    this.setState({name});
  }

  handleSubmit(e, nameInput) {
    e.preventDefault();
    // Imagine an ajax call to update name to server
    this.setState({
      name: nameInput.value,
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
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Sidebar name={this.state.name}/>
        <Banner nameSet={this.state.nameSet}/>
        <HelloWorldContainer
          name={this.state.name}
          onSubmit={this.handleSubmit}
          onCancel={this.handleCancel}
          onClick={this.handleClick}
          modalIsOpen={this.state.modalIsOpen}
        />
      </div>
    );
  }
}

export default App;
