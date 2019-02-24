import React from 'react'
import { Col, Row, Card } from 'antd'
import './index.less'

export default class Home extends React.Component{
    render(){
        return (
            <div className="home-wrap">
                
                <Row gutter={24}>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Card className="card">
                            
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Card className="card">
                           
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Card className="card">
                           
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Card className="card">
                           
                        </Card>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                        <Card className="xl-card">
                            
                        </Card>
                    </Col>
                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Card className="lg-card">
                           
                        </Card>
                        <Card className="lg-card">
                           
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