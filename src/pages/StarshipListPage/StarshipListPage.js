import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import StarshipPage from '../StarshipPage/StarshipPage';
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
                
                <Switch>

<Route exact path='/' render={() => 
  <section>
   
    
    {this.state.starships.map(starship => 
      
      <Link
        
      to={{
          pathname: '/starships',
          state: starship
        }}
        key={starship.name}
             
             >

            {starship.name}
            </Link>
      
              )}
                </section>
              }/>

              <Route path='/starships' render={({location}) => 
                <StarshipPage
                location={location}
                />
              }/>

              </Switch>
                
            </div>
        )
    }
}
export default StarshipListPage