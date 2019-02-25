import React from 'react'
import L from 'leaflet'
import './LeafletMap.less'
import LeafletImageOverlay from './LeafletImageOverlay'
import LeafletMarker from './LeafletMarker'

export default class LeafletMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            origin: [0, 0],//原点坐标(0,0)
            markerDraggable : true
        };
    }


    handleClick = ()=>{
        this.setState({
            markerDraggable : !this.state.markerDraggable
        });
    }


    componentWillMount() {
        if(document.getElementById("map")){
            let map = L.map("map", {
                zoom: this.props.zoom,
                attributionControl: this.props.attributionControl,
                minZoom: this.props.minZoom,
                maxZoom: this.props.maxZoom,
                center: this.state.origin
            });
            this.setState({
                map: map
            })
        }
    }

    render() {
        return (
            <div>
                <LeafletImageOverlay map={this.state.map}/>
                <LeafletMarker position={ [0,0] } draggable={this.state.markerDraggable} map={this.state.map}></LeafletMarker>
                <LeafletMarker position={ [5,5] } draggable={this.state.markerDraggable} map={this.state.map}></LeafletMarker>
                <LeafletMarker position={ [-6,10] } draggable={this.state.markerDraggable} map={this.state.map}></LeafletMarker>
                <LeafletMarker position={ [13,-25] } draggable={this.state.markerDraggable} map={this.state.map}></LeafletMarker>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }
}