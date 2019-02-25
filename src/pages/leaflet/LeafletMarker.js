import React from 'react'
import L from 'leaflet'
import './LeafletMarker.less'

export default class LeafletMarker extends React.Component {

    constructor(props) {
        super(props);
        this.marker = L.marker(props.position,{
                draggable: props.draggable
        });
        if(props.map !== undefined){
            this.marker.addTo(props.map)
        }
    }

    componentWillMount(props){
        
    }

    componentDidMount(){

    }

    componentWillReceiveProps(props){
        let dragHandler = this.marker.dragging;
        if(dragHandler !== undefined){
            !props.draggable ?
            this.marker.dragging.disable() : this.marker.dragging.enable();
        }
    }

    render(){
        return(
            <div></div>
        );
    }
}