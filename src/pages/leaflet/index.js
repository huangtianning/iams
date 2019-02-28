import React from 'react'
import './index.less'
import {
    Map,
    ImageOverlay
} from 'react-leaflet'
import { Switch, Button, Icon, Card } from 'antd'
import IconMarker from './iconMarker'
import { mapInitData, valueChangeData } from './../../config/leafletConfig'
import Mock from 'mockjs'




export default class Leaflet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            draggable: false,
            mapInitData: mapInitData,
            valueChangeData: valueChangeData,
            openDataSource: false,
            dataSource: null
        };
    }


    sendMockData = () => {
        let MockData = Mock.mock({
            valueChangeData: [
                {
                    id: 1,
                    value: "@natural(20, 80)",
                },
                {
                    id: 2,
                    value: "@natural(20, 80)",
                },
                {
                    id: 3,
                    value: "@natural(20, 80)",
                },
            ],
        }).valueChangeData;
        this.setState({
            valueChangeData: MockData
        })
    }

    draggableSwitch = (checked) => {
        this.setState({
            draggable: checked
        })
    }

    getValueShouldChangeByIndex = (index) => {
        for (let i = 0; i < this.state.valueChangeData.length; i++) {
            if (index === this.state.valueChangeData[i].id) {
                return this.state.valueChangeData[i].value
            }
        }
        return "error";
    }

    renderIconMarkerList = (markerListData) => {
        /*IconMarker组件的index必须是唯一的，否则index相同的只会显示其中一个 */
        return markerListData.map((item) => {
            // console.log(item)
            return (

                <IconMarker
                    draggable={this.state.draggable}
                    index={item.id}
                    value={this.getValueShouldChangeByIndex(item.id)}
                    position={item.position}
                    key={item.id}
                />

            )
        })
    }

    render() {
        return (
            <div className="leaflet-page">
                <div className="map-container">
                    <Map
                        className="map"
                        center={[0, 0]}
                        zoom={3}
                        maxZoom={5}
                        minZoom={2}
                    >
                        <ImageOverlay className="map-background-image" url="" bounds={[[54, 106], [-54, -116]]} />
                        {/*IconMarker组件的index必须是唯一的，否则index相同的只会显示其中一个 */}
                        {this.renderIconMarkerList(this.state.mapInitData)}
                    </Map>
                </div>
                <div className="map-controller">
                    <div className="map-controller-switch">
                        <span>Draggable</span>
                        <Switch onChange={this.draggableSwitch} />
                    </div>
                    <div className="map-controller-button">
                        <span>SendMockData</span>
                        <Button type="primary" shape="circle" onClick={this.sendMockData} ><Icon type="arrow-left" /></Button>
                    </div>
                    <Card
                        size="small"
                        title="react-leaflet"
                        extra={<a href="https://react-leaflet.js.org/" target={"blank"}>More</a>}
                        style={{ marginBottom: 24 }}
                    >
                        <p>React-Leaflet provides an abstraction of 
                            <span aria-label="" role="img">🍃</span> Leaflet as 
                            <span aria-label="" role="img">⚛️</span>React components.
                        </p>
                    </Card>
                    <Card
                        size="small"
                        title="echarts-for-react"
                        extra={<a href="https://www.npmjs.com/package/echarts-for-react" target={"blank"}>More</a>}
                        style={{ marginBottom: 24 }}
                    >
                        <p>Echarts-for-react provides an abstraction of  echarts as 
                            <span aria-label="" role="img">⚛️</span>React components.
                        </p>
                    </Card>
                    <Card
                        size="small"
                        title="数据演示"
                        style={{ marginBottom: 16 }}
                    >
                        <p>
                            点击"Draggable"切换按钮，地图中的传感器标记将在可拖动和不可拖动状态间切换。
                        </p>
                        <p>
                            点击"SendMockData"按钮，发送随机生成的假数据，传感器标记面板将展示数据的改变，若点击它们打开echarts面板，还可看到数据的流动。
                        </p>
                    </Card>
                </div>
            </div>

        );
    }


}