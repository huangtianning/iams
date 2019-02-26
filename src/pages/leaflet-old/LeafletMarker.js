import React from 'react'
import L from 'leaflet'
import './LeafletMarker.less'
import Icon from './class/icon'

export default class LeafletMarker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }

        let myIcon = new Icon(props.type, this.state.value);
        this.marker = L.marker(props.position,{
                draggable: props.draggable,
        });
        if(props.map !== undefined){
            this.marker.setIcon(myIcon.getInstance());
            this.marker.addTo(props.map);
        }
    }

    componentWillMount(props){
        
    }

    componentDidMount(){

    }

    componentWillUpdate(){
        
    }


    componentWillReceiveProps(props){
        let dragHandler = this.marker.dragging;
        if(dragHandler !== undefined){
            !props.draggable ?
            this.marker.dragging.disable() : this.marker.dragging.enable();
        }
        this.setState({
            value: props.value
        })
        let icon = new Icon(this.props.type, this.state.value);
        this.marker.setIcon(icon.getInstance());
    }

    render(){
        return(
            <div></div>
        );
    }
}