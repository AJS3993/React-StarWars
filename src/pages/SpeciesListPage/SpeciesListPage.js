import React, {Component} from 'react';
import { getAllSpecies } from '../../services/sw-api';
import './SpeciesListPage.css';

class SpeciesListPage extends Component{
    constructor(){
        super()
      
        this.state = {
          species: []
        };
      }
    
          getSpecies = (idx) => {
            return this.state.species[idx];
          }
    
          async componentDidMount() {
            const species = await getAllSpecies();
            this.setState({ species: species.results });
          }
    
        render(){
            return(
                <div>    
              <h1>Species</h1>
              <section>
                    {this.state.species.map(species => 
                    <div className='species' key={species.name}>
                    {species.name}
                    </div>
                    )}
                </section>
                </div>
            )
        }
    }
    
    export default SpeciesListPage
