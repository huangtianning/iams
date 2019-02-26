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
                center: this.props.center,
                maxBounds: this.props.maxBounds
            });
            this.setState({
                map: map
            })
        }
    }

    componentWillReceiveProps(props){

    }

    render() {
        return (
            <div>
                <LeafletImageOverlay map={this.state.map}/>
                <LeafletMarker value={3} type={"sensor"} position={ [0,0] } draggable={this.props.message.shouldMarkersFixed} map={this.state.map}></LeafletMarker>
                <LeafletMarker value={4} type={"device"} position={ [5,5] } draggable={this.props.message.shouldMarkersFixed} map={this.state.map}></LeafletMarker>
                <LeafletMarker value={5} type={"camera"} position={ [-6,10] } draggable={this.props.message.shouldMarkersFixed} map={this.state.map}></LeafletMarker>
                <LeafletMarker value={6} type={"sensor"} position={ [13,-25] } draggable={this.props.message.shouldMarkersFixed} map={this.state.map}></LeafletMarker>
            </div>
        );
    }
}