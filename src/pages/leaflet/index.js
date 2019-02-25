import React from 'react'
import './index.less'
import LeafletMap from './LeafletMap'

export default class Leaflet extends React.Component{


    componentWillMount(){
        let map = document.createElement("div");
        map.id = "map";
        let firstChildOfContentDetails = document.getElementsByClassName("Content-details")[0]
        if(firstChildOfContentDetails !== undefined){
            firstChildOfContentDetails.appendChild(map);
        }
    }

    componentDidMount(){
        
    }

    componentWillUnmount(){
        let map = document.getElementById("map");
        if(map){
            map.parentNode.removeChild(map);
        }
    }

    render(){
        return(
            <div className="map-data">
                <LeafletMap 
                zoom={3}
                attributionControl={ true }
                minZoom={ 1 }
                maxZoom={ 6 }
                />  
            </div>
        )
    }
}