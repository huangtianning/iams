import React from 'react'
import { Row, Col, Divider,Timeline,Tabs } from 'antd'
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
                    <Timeline.Item>2013-09-01 以超一本线56分的成绩进入武汉理工大学(211工程大学)就读数学类专业。 </Timeline.Item>
                    <Timeline.Item>2014 开始接触java编程，阅读了一些java书籍，同年分到信息与计算科学专业。</Timeline.Item>
                    <Timeline.Item>2015-2016 与同学组建了一只乐队，担任贝斯手和队长，参加了武汉校园音乐节，年轻总要疯一把<Emoji emoji=':laughing:' size={24}/><Emoji emoji=':musical_note:' size={24}/>~</Timeline.Item>
                    <Timeline.Item>2017-01 回到南宁进入公司从事web后端开发实习，开始接触前端开发，同时毕业设计做了一个仿微信的APP，自己实现了一个最简单的服务器。</Timeline.Item>
                </Timeline>

                <Divider orientation="right">个人技术栈</Divider>
                <Tabs defaultActiveKey="1" style={{marginLeft:24,marginRight:24}}>
                    <TabPane tab="前端" key="1">Content of Tab Pane 1</TabPane>
                    <TabPane tab="后端" key="2">Content of Tab Pane 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                </Tabs>


                <Divider orientation="right">工作与项目经历</Divider>
                <Timeline className='Timeline'>
                    <Timeline.Item>
                        2017-6 就职于广西南宁一家物联网初创公司，担任前端开发，同时负责一部分的后端开发任务和初级运维工作。上线项目“金牛物联网监控平台”(智慧农业方向)，
                        客户分布于广西各地，如广西农职院，钦州水产基地等。该项目前端框架基于bootstrap，Jquery，后端框架使用mybatis + spring + springMVC + mysql。前端通过Jquery.ajax调用后端
                        提供的api，使用websocket实现后端实时推送农业传感器数据到前端，前端动态展示数据的变化和图表。前端用到的库有leaflet + echarts。这次项目经历让我对软件开发的整个流程
                        有了一个整体性的认识，同时对前端技术产生了浓厚的兴趣。
                    </Timeline.Item>
                    <Timeline.Item>
                        2018 由于业务变动，公司开始开发手机端app，考虑到成本需求，决定开发webapp，与后端共用一套接口。我担任了项目从零开始的构建和架构工作，移动端webapp基于framework7
                        框架，再使用cordova打包成apk，安装在手机上使用。期间我手写了大部分的css和js代码，开始意识到原生能力的重要性，只是会使用库和框架是不够的，因此我开始巩固自己的前端基础。
                    </Timeline.Item>
                    <Timeline.Item>
                        2018-12至今 着手于搭建github开源项目(IAMS)，同时学习使用新一代的前端框架react。本项目基于react + react-router + antd，包管理工具使用yarn，脚手架工具使用creat-react-app.
                        因为antd使用less，所以本项目也使用less作为css预处理器。该项目还集成了leaflet + echarts做数据展示，使用mockjs产生假数据模拟后端接口。
                    </Timeline.Item>
                    <Timeline.Item>
                        未来，我还想学习更多更先进的前端技术，我拥有充沛的经历和快速学习的能力，希望能与更多的技术牛人共事<Emoji emoji=':laughing:' size={24}/>
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