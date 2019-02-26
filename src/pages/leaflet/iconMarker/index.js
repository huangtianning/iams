import React from 'react'
import './index.less'
import { Marker, Popup } from "react-leaflet"
import PopupContent from './../popupContent'
import IconProvider from './IconProvider'


export default class IconMarker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            position: props.position,
            value: props.value,
            icon: (new IconProvider(props.index, props.className)).getIcon(),
        }
    }

    updateMarkerValue = (value) => {
        document.getElementById(`marker-value-${this.props.index}`).innerHTML = value;
    }

    componentDidMount() {
        this.updateMarkerValue(this.props.value)
    }

    componentDidUpdate() {
        this.updateMarkerValue(this.props.value)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        })
    }

    render() {
        return (
            <Marker
                position={this.state.position}
                icon={this.state.icon}
                draggable={this.props.draggable}
            >
                <Popup>
                    <PopupContent />
                </Popup>
            </Marker>
        )
    }
}