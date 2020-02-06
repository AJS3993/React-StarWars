import React, {Component} from 'react';
import { getAllVehicles } from '../../services/sw-api';
import './VehicleListPage.css';

class VehicleListPage extends Component{
    constructor(){
        super()
      
        this.state = {
          vehicles: []
        };
      }
    
          getVehicles = (idx) => {
            return this.state.vehicles[idx];
          }
    
          async componentDidMount() {
            const vehicles = await getAllVehicles();
            this.setState({ vehicles: vehicles.results });
          }
    
        render(){
            return(
                <div>    
              <h1 className='vehicleh1'>Vehicles</h1>
              <section className='vehiclesection'>
                    {this.state.vehicles.map(vehicles => 
                    <div className='vehicle' key={vehicles.name}>
                    {vehicles.name}
                    </div>
                    )}
                </section>
                </div>
            )
        }
    }
    
    export default VehicleListPage
