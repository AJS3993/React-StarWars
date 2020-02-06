import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './Nav.css'
import StarshipListPage from '../../pages/StarshipListPage/StarshipListPage';
import PlanetListPage from '../../pages/PlanetListPage/PlanetListPage';
import SpeciesListPage from '../../pages/SpeciesListPage/SpeciesListPage';
import VehicleListPage from '../../pages/VehicleListPage/VehicleListPage';

export default function BasicExample() {
    return (
      <Router>
        <div className='nav'>
          <ul>
            
            <li>
              <Link to="/">Ships</Link>
            </li>
            
            <li>
              <Link to="/planets">Planets</Link>
            </li>

            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>

            <li>
              <Link to="/species">Species</Link>
            </li>
          
          </ul>
  
          <Switch>
            
            <Route exact path="/">
              <StarshipListPage />
            </Route>

            <Route path="/planets">
              <PlanetListPage />
            </Route>

            <Route path="/vehicles">
              <VehicleListPage />
            </Route>
            
            <Route path="/species">
              <SpeciesListPage />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }