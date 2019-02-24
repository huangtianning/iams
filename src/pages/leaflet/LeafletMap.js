import React from 'react'
import L from 'leaflet'
import './LeafletMap.less'


const origin = [0, 0];//原点坐标(0,0)

export default class LeafletMap extends React.Component {

    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
    }

    componentWillMount() {

    }

    componentDidMount() {
        let map = L.map(this.mapRef.current, {
            //该方式使用ref获取dom节点来初始化map对象，也可用传递元素#id的方式，需要注意引入样式文件，初始化map的dom节点必须设置宽高地图才能显示
            zoom: 3,
            attributionControl: false,
            minZoom: 1,
            maxZoom: 6,
            center: origin
        });
        L.imageOverlay("imageUrl", [[54, 106], [-54, -116]], { className: "react-leaflet-imageOverlay" }).addTo(map);
        L.marker([0, 0], {
            draggable:true
        }).addTo(map);
    }

    render() {
        return (
            <div className="react-leaflet-map" ref={this.mapRef}></div>
        );
    }
}