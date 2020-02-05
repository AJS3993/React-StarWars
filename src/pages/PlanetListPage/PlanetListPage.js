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
        console.log(planets)
      }

    render(){
        return(
            <div>
                
                
                {this.state.planets.map(planet => 
            
                <div key={planet.name}>
                {planet.name}
                </div>

                )}
            
            </div>
        )
    }
}

export default PlanetListPage