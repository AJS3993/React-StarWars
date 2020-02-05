import React, {Component} from 'react';
import { getAllPlanets } from '../../services/sw-api';
import './PlanetListPage.css'

class PlanetListPage extends Component{
  constructor(){
    super()
  
    this.state = {
      planets: []
    };
  }

   

      getPlanets = (idx) => {
        return this.state.planets[idx];
      }

      async componentDidMount() {
        const planets = await getAllPlanets();
        this.setState({ planets: planets.results });
      }

    render(){
        return(
            <div>    
          <h1>Planets</h1>
          <section>
                {this.state.planets.map(planet => 
                <div className='planet' key={planet.name}>
                {planet.name}
                </div>
                )}
            </section>
            </div>
        )
    }
}

export default PlanetListPage