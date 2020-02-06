import React, {Component} from 'react';
import './MapPage.css';

class MapPage extends Component{
    render(){
        return(
            <>
            <h1>Galaxy Map</h1>
            <div className='mapContainer'> 
                <img src='https://geoawesomeness.com/wp-content/uploads/2015/12/Galaxy-Map-2009-The-Essential-Atlas-Star-Wars.png'/>
            </div>
            </>
        )
    }
}

export default MapPage