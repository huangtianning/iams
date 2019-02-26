import React from 'react'
import './index.less'
import { 
    Map, 
    ImageOverlay
 } from 'react-leaflet'
import { Button } from 'antd'
import IconMarker from './iconMarker'
import markerListData from './../../config/leafletConfig'

export default class Leaflet extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 15420,
            draggable: true
        };
    }

    handleClick = ()=>{
        this.setState({
            count: (this.state.count+1),
            draggable: !this.state.draggable
        })
    }


    renderIconMarkerList = (markerListData)=>{
        return markerListData.map((item) =>{
            return (
                <IconMarker 
                draggable={this.state.draggable} 
                index={ item.id } 
                value={ item.value } 
                position={item.position}
                key={ item.id }
                />      
            )
        })
    }


    render(){
        console.log("Leaflet render.")
        return(
            <div className="map-container">
                <Map 
                className="map" 
                center={[0, 0]} 
                zoom={3}
                >
                    <ImageOverlay className="map-background-image" url="" bounds={[[54, 106], [-54, -116]]}/>
                                         {/* index必须是唯一的，否则index相同的只会显示其中一个 */}
                    {/* <IconMarker draggable={this.state.draggable} index={ 115 } value={ this.state.count } position={[5, 8]}/>
                    <IconMarker draggable={this.state.draggable} index={ 116 } value={ this.state.count } position={[7, -13]}/>
                    <IconMarker draggable={this.state.draggable} index={ 117 } value={ this.state.count } position={[-15, -20]}/> */}
                        {this.renderIconMarkerList(markerListData)}
                    <Button onClick={this.handleClick}>click me</Button>
                </Map>
            </div>
        );
    }

    
}