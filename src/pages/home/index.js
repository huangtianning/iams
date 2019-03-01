import React from 'react'
import { Col, Row, Card, Icon, Timeline } from 'antd'
import NProgress from 'nprogress'
import './../../css/nprogress.css' //这个样式必须引入
import './index.less'
import ReactEcharts from 'echarts-for-react';
import option from './options'
import CardHeader from './components/cardHeader'
import CardBody from './components/cardBody'


export default class Home extends React.Component {

    componentWillMount() {
        NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
        NProgress.start();
    }

    componentDidMount() {
        NProgress.done()
    }

    render() {
        return (
            <div className="home-wrap">

                <Row gutter={24}>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card className="card"
                            title={<CardHeader title={"Total humidity"} iconUrl={"../assets/humidity.png"} iconColor={'#8fc9fb'}/>}
                            headStyle={{ borderBottom: "none" }}
                            hoverable={true}
                        >
                            <CardBody 
                                value1={5454.45} 
                                value2={10.45}
                                icon={<Icon type="arrow-up" />}
                                value2Color={"#3f8600"}
                                />
                                
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card className="card"
                            title={<CardHeader title={"Total Light"} iconUrl={"../assets/light.png"} iconColor={'#f8c82e'}/>}
                            headStyle={{ borderBottom: "none" }}
                            hoverable={true}
                        >
                            <CardBody 
                                value1={832.45} 
                                value2={5.73}
                                icon={<Icon type="arrow-up" />}
                                value2Color={"#3f8600"}
                                />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Card className="card"
                            title={<CardHeader title={"Total temperature"} iconUrl={"../assets/temp.png"} iconColor={'#64ea91'}/>}
                            headStyle={{ borderBottom: "none" }}
                            hoverable={true}
                        >
                           <CardBody 
                                value1={4894.45} 
                                value2={16.02}
                                icon={<Icon type="arrow-down" />}
                                value2Color={"#f85b62"}
                                />
                        </Card>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                        <Card className="xl-card">
                            <ReactEcharts
                                ref={(e) => { this.echarts_react = e; }}
                                option={ option }
                                style={{ height: '462px', width: '100%' }}
                                className='react_for_echarts' />
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                        <Card 
                        className="lg-card"
                        title={<CardHeader title={"Schedule"}/>}
                        headStyle={{ borderBottom: "none" }}
                        >
                            <Timeline mode="alternate">
                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Timeline.Item>
                                <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>Technical testing 2015-09-01</Timeline.Item>
                            </Timeline>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card className="lg-card-12">

                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Card className="lg-card-12">

                        </Card>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Card className="xxl-card">

                        </Card>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Card className="m-card">

                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Card className="m-card">

                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                        <Card className="m-card">

                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}
