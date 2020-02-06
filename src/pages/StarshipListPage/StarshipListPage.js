import React, {Component} from 'react';
import { getAllStarships } from '../../services/sw-api';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import StarshipPage from '../StarshipPage/StarshipPage';
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
      <Router>
        
        
        
        <h1 className='shiph1'>Ships</h1>

        <Switch>
          <Route exact path='/' render={() => 

        <section className='shipsection'>
          {this.state.starships.map((starship, idx) => 
           <Link key={starship.name} to={`/starships/${idx}`}>
            <div className='ship' key={starship.name}>
              {starship.name}
               </div>
               </Link> 
          )}
        </section>  
    }/>
          
              <Route path='/starships/:idx' render={(props) =>
              <StarshipPage {...props} getStarship={this.getStarship}/>
              }/>
          </Switch>
      
      </Router>
    )
  }
}

export default StarshipListPage