import React from 'react'
import './index.less'
// import { Map,  Marker, Popup,ImageOverlay } from 'react-leaflet'
// import { Button } from 'antd'

import LeafletMap from './LeafletMap'


export default class Leaflet extends React.Component{

    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 3,
    }

    constructor(props){
        super(props);
        this.markerRef = React.createRef();
    }
   
    

    handleClick = () => {
        const marker = this.markerRef.current
        if (marker != null) {
            marker.leafletElement.setOpacity(0.5);
            console.log(marker)
        }
    }
    

    render(){
        // const origin  = [0, 0];//原点坐标(0,0)
        
        return(
            // <Map 
            // className="map-container" 
            // zoom={this.state.zoom}
            // attributionControl={ false }
            // minZoom={ 1 }
            // maxZoom={ 6 }
            // center={ origin }
            // >
            
            //     <Button onClick={this.handleClick} className="test-btn">click</Button>

            //     <ImageOverlay url="" bounds={[[54, 106], [-54, -116]]} className="ImageOverlay"/>

            //     <Marker 
            //     position={origin} 
            //     draggable={true}
            //     ref={this.markerRef}
            //     >
            //         <Popup>
            //             A pretty CSS3 popup. <br /> Easily customizable.
            //         </Popup>
            //     </Marker>
            // </Map>
            <LeafletMap></LeafletMap>
        )
    }
}