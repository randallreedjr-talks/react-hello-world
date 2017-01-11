// App.js
import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import logo from './logo.svg';
import './App.css';

import HelloStore from './HelloStore.js';
import StoreContainer from './StoreContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Provider store={new HelloStore()}>
          <StoreContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
