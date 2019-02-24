import React from 'react'
import './index.less'
import { Card, Icon, Col, Row } from 'antd';
import { Link } from 'react-router-dom'
// import BaseConfig from './../../config/baseConfig'
import MockData from './../../mock'

const BaseConfig = MockData.baseList

export default class Base extends React.Component{

    enterBaseLink = (baseItem)=>{
        return (
            <div> 
                <Link param={ baseItem } to={ 
                    { 
                        pathname:  "/admin/base/baseDetails" , 
                        state : baseItem
                    }
                }>
                    <Icon type="enter" />
                </Link>
            </div>
        );
           
    }

    renderBaseNode = (data)=>{
        return data.map((item)=>{
            return(
            <Col  key={ item.id } xs={24} sm={12} md={6} lg={6} xl={6}>
                <Card
                    className="base-card"
                    cover={<img alt="example" src={ item.imgUrl } />}
                    actions={[ this.enterBaseLink(item) , <Icon type="edit" />, <Icon type="ellipsis" />]}
                >
                    <Card.Meta
                    // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={ item.name }
                    description={ item.type }
                    />
                </Card>
            </Col>
            )
        });
    }

    componentWillMount(){
        const baseNode = this.renderBaseNode(BaseConfig);
        this.props.baseDataHook(BaseConfig);
        // console.log("base componentWillMount.")
        this.setState({
            baseNode
        });
    }

    render(){

        return(
            <div className="base-content">
                <Row gutter={24}>
                    {/* <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card
                            className="base-card"
                            cover={<img alt="example" src="imgs/house.png" />}
                            actions={[ this.enterBaseLink(888) , <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Card.Meta
                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="钦州水产基地"
                            description="使用物联网技术养殖水产"
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6} xl={6}>
                        <Card
                            className="base-card"
                            cover={<img alt="example" src="imgs/house.png" />}
                            actions={[<Icon type="enter" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                        >
                            <Card.Meta
                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title="农职院石斛园"
                            description="使用物联网技术养殖石斛"
                            />
                        </Card>
                    </Col> */}
                    { this.state.baseNode }
                </Row>
            </div>
        );
    }
}