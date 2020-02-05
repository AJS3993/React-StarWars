import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Nav.css'
import StarshipListPage from '../../pages/StarshipListPage/StarshipListPage';
import PlanetListPage from '../../pages/PlanetListPage/PlanetListPage';

export default function BasicExample() {
    return (
      <Router>
        <div>
          <ul>
            
            <li>
              <Link to="/">Ships</Link>
            </li>
            
            <li>
              <Link to="/planets">Planets</Link>
            </li>
          
          </ul>
  
          <hr />
  
          <Switch>
            
            <Route exact path="/">
              <StarshipListPage />
            </Route>

            <Route path="/planets">
              <PlanetListPage />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }