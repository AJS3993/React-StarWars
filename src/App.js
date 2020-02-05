import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        
        <header className="App-header">STAR WARS</header>

        <Nav />

      </div>
    );
  }

}

export default App;
