import React from 'react'
import './index.less'
import { 
    Map, 
    // TileLayer, 
    Marker, 
    Popup,
    ImageOverlay,
 } from 'react-leaflet'

export default class Leaflet extends React.Component{
    
    render(){
        const position = [0, 0];
        return(
            <div className="map-container">
            <Map 
            className="map" 
            center={position} 
            zoom={3}
            // zoomControl={false}
            >
                {/* <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                <ImageOverlay className="map-background" url="" bounds={[[54, 106], [-54, -116]]}/>
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </Map>
            </div>
        );
    }
}