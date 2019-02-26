import React from 'react'
import './index.less'
import LeafletMap from './LeafletMap'
import { Button } from 'antd';

export default class Leaflet extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            message : {
                shouldMarkersFixed: false
            }
        }
    }

    handleClick = ()=>{
        this.setState({
            message : {
                shouldMarkersFixed: !this.state.message.shouldMarkersFixed
            }
        });
    }

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
                zoom={2}
                attributionControl={ true }
                minZoom={ 1 }
                maxZoom={ 4 }
                center={[0,0]}
                maxBounds={ [[84, 200], [-84, -200]] }
                message={ this.state.message }
                />  
                <Button className="leaflet-controller" onClick={this.handleClick}>click</Button>
            </div>
        )
    }
}