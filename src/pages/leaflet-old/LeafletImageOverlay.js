import React from 'react'
import L from 'leaflet'
import './LeafletImageOverlay.less'

export default class LeafletImageOverlay extends React.Component {

    constructor(props) {
        super(props);
        let imageUrl = '',
        imageBounds = [[54, 106], [-54, -116]];
        if (props.map !== undefined) { L.imageOverlay(imageUrl, imageBounds, { className: "react-leaflet-imageOverlay" }).addTo(props.map) }
    }

    componentWillMount() {

    }

    componentDidMount() {
    }

    render() {
        return (
            <div></div>
        );
    }
}
