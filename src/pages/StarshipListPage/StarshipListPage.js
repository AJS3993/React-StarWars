import React, {Component} from 'react';
import { getAllStarships } from '../../services/sw-api';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import StarshipPage from '../StarshipPage/StarshipPage';
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
        <h1 className='shiph1'>Ships</h1>

        <section className='shipsection'>
          {this.state.starships.map((starship, idx) => 
            <div className='ship' key={starship.name}>
              {starship.name}

              
            



             
            </div>
          )}
        </section>     
      </div>
    )
  }
}

export default StarshipListPage