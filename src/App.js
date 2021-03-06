import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Slider from './Slider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <h2>Rapidly click on the controls below the slider to reproduce the bug</h2>
          <Slider />
        </div>
      </div>
    );
  }
}

export default App;
