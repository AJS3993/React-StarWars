import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { getAllStarships } from './services/sw-api';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import StarshipListPage from './pages/StarshipListPage/StarshipListPage'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">STAR WARS</header>

        <div className='nav'>
          
          <div>Ships</div>

          <div>Planets</div>
        
        </div>

        <StarshipListPage />

      </div>
    );
  }

}

export default App;
