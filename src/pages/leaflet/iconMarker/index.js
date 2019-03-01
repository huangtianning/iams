import React from 'react'
import './index.less'
import { Marker, Popup } from "react-leaflet"
import PopupContent from './../popupContent'
import IconProvider from './IconProvider'

export default class IconMarker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // position: props.position,
            value: props.value,
            icon: (new IconProvider(props.index, props.className)).getIcon(),
            echartsData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            axisData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        }
    }

    updateMarkerValue = (value) => {
        document.getElementById(`marker-value-${this.props.index}`).innerHTML = value;
    }

    updateEchartsData = (data, value) => {
        data.shift();
        data.push(value);
        return data;
    }

    componentWillMount(){
        this.setState({
            position: this.props.position,
        })
    }

    componentDidMount() {
        this.updateMarkerValue(this.props.value)
    }

    componentDidUpdate() {
        this.updateMarkerValue(this.props.value)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
            echartsData: this.state.value===nextProps.value? this.state.echartsData : this.updateEchartsData(this.state.echartsData, nextProps.value),
            axisData: this.state.value===nextProps.value? this.state.axisData : this.updateEchartsData(this.state.axisData, (new Date()).toLocaleTimeString().replace(/^\D*/,''))
        })
    }

    render() {
        return (
            
                <Marker
                    position={this.state.position}
                    icon={this.state.icon}
                    draggable={this.props.draggable}
                >
                    <Popup 
                    closeButton={false} 
                    maxWidth={640} 
                    maxHeight={360}

                    >
                        <PopupContent 
                        axisData={this.state.axisData} 
                        echartsData={this.state.echartsData} 
                        value={this.state.value} 
                        title={"Title"} />
                    </Popup>
                </Marker>
            
        )
    }
}