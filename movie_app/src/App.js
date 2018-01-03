import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      // all your components under this div
      <div className="App">
        <Movie />
        <Movie />
        <Movie />
        
      </div>
    );
  }
}

export default App;
