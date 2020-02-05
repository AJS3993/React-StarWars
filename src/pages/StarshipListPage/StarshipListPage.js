import React, {Component} from 'react';
import { getAllStarships } from '../../services/sw-api';
import './StarshipListPage.css'

class StarshipListPage extends Component{

    state = {
        starships: []
      };

      getStarship = (idx) => {
        return this.state.starships[idx];
      }
    
      async componentDidMount() {
        const starships = await getAllStarships();
        this.setState({ starships: starships.results });
      }

    render(){
        return(
            <div>
                
             <h1>Ships</h1>

             <section>
       
       {this.state.starships.map(ship => 
   
       
       <div className='ship' key={ship.name}>
       {ship.name}
       </div>
       
      

       )}
   </section>
                
            </div>
        )
    }
}
export default StarshipListPage