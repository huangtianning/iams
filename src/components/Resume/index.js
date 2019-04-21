import React from 'react'
import { Row, Col, Divider,Timeline,Tabs, Tag  } from 'antd'
import './index.less'
import './emoji-mart.css'
import { Emoji } from 'emoji-mart'

const TabPane = Tabs.TabPane;

const DescriptionItem = ({ title, content }) => (
    <div
        style={{
            fontSize: 14,
            lineHeight: '22px',
            marginBottom: 8,
            marginLeft: 24,
            color: 'rgba(0,0,0,0.65)',
        }}
    >
        <p
            style={{
                marginRight: 8,
                display: 'inline-block',
                color: 'rgba(0,0,0,0.85)',
            }}
        >
            {title}:
      </p>
        {content}
    </div>
);

export default class Resume extends React.Component {


    render() {
        return (
            <div>

                <Divider orientation="right">基本信息</Divider>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="姓名" content="黄天宁" />{' '}
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="年龄" content="24" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="性别" content="男" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="籍贯" content="广西壮族自治区南宁市" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="民族" content="汉族" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="学历" content="本科" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="专业" content="信息与计算科学" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="毕业院校" content="武汉理工大学" />
                    </Col>
                </Row>



                <Divider orientation="right">教育经历</Divider>
                <Timeline className='Timeline'>
                    <Timeline.Item>xxxxx </Timeline.Item>
                    <Timeline.Item>xxxxx</Timeline.Item>
                    <Timeline.Item>xxxxx<Emoji emoji=':laughing:' size={24}/><Emoji emoji=':musical_note:' size={24}/>~</Timeline.Item>
                    <Timeline.Item>xxxxx</Timeline.Item>
                </Timeline>

                <Divider orientation="right">技术和能力</Divider>
                <Tabs defaultActiveKey="1" style={{marginLeft:24,marginRight:24}}>
                    <TabPane tab="前端" key="1">
                        <p><Tag color="magenta">基础</Tag>熟练掌握html5,css3,对其新特性有所了解，了解响应式设计，能较好地实现UI设计（本项目登录页和整体设计风格借鉴了ant admin，css代码由我独立编写），审美观符合主流。熟悉es5,es6,了解es6新特性，能手写原生js代码。了解常用的数据结构和算法，具备一定的计算机基础知识。</p>
                        <p><Tag color="red">React</Tag>能较为熟练地使用react系的框架和工具开发web应用，包括但不限于react-router、antd， 对react组件化、数据流有较为深刻的认识。</p>
                        <p><Tag color="green">Leaflet</Tag>熟练使用js地图库leaflet，能在其基础上进行深度定制开发，有实际项目经验。</p>
                        <p><Tag color="blue">Echarts</Tag>熟练使用百度图表库echarts，能熟练进行配置和使用，有实际项目经验。</p>
                        <p><Tag color="yellow">工作流</Tag>熟悉新一代前端开发工作流，熟练使用yarn打包和部署项目，对webpack配置有所了解。</p>
                    </TabPane>
                    <TabPane tab="后端" key="2">
                        <p><Tag color="volcano">Java</Tag>熟悉java语言，负责过后端业务逻辑实现。</p>
                        <p><Tag color="geekblue">Mybatis</Tag>熟悉mybatis框架，在项目中写过dao层和后端api，熟悉mvc。</p>
                        <p><Tag color="cyan">Nginx</Tag>熟悉Nginx，了解常用配置，本项目在线demo即部署在Nginx上。</p>
                    </TabPane>
                </Tabs>


                <Divider orientation="right">工作与项目经历</Divider>
                <Timeline className='Timeline'>
                    <Timeline.Item>
                    xxxxx
                    </Timeline.Item>
                    <Timeline.Item>
                    xxxxx
                    </Timeline.Item>
                    <Timeline.Item>
                    xxxxx
                    </Timeline.Item>
                    <Timeline.Item>
                    xxxxx
                    </Timeline.Item>
                </Timeline>


                <Divider orientation="right">联系方式</Divider>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Email" content="907442024@qq.com" />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Phone" content="+86 181 7235 9628" />
                    </Col>          
                </Row>
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="QQ" content='907442024' />
                    </Col> 
                    <Col span={12}>
                        <DescriptionItem title="Wechat" content='htn907442024' />
                    </Col> 
                </Row>
                <Row>
                    <Col span={24}>
                        <DescriptionItem
                            title="Github"
                            content={(
                                <a href="https://github.com/huangtianning">https://github.com/huangtianning</a>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}