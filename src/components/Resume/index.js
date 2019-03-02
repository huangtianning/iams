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
                    <Timeline.Item>2013-09-01 以超一本线56分的成绩进入武汉理工大学(211工程大学)就读数学类专业。 </Timeline.Item>
                    <Timeline.Item>2014 开始接触java编程，阅读了一些java书籍，同年分到信息与计算科学专业。</Timeline.Item>
                    <Timeline.Item>2015-2016 与同学组建了一只乐队，担任贝斯手和队长，参加了武汉校园音乐节，年轻总要疯一把<Emoji emoji=':laughing:' size={24}/><Emoji emoji=':musical_note:' size={24}/>~</Timeline.Item>
                    <Timeline.Item>2017-01 回到南宁进入公司从事web后端开发实习，开始接触前端开发，同时毕业设计做了一个仿微信的APP，自己实现了一个最简单的服务器。</Timeline.Item>
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
                    <TabPane tab="性格" key="3">
                        <p>性格开朗，善于理解业务需求，常常站在客户角度思考如何完善产品的设计和适用性，对产品设计有自己的见解。喜欢钻研技术问题，常常会因为没有解决问题忘记吃饭和睡觉<Emoji emoji=':joy:' size={24}/>，是一个完美主义者。</p>
                    </TabPane>
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
                        未来，我还想学习更多更先进的前端技术，我拥有充沛的精力和快速学习的能力，希望能与更多的技术牛人共事和学习<Emoji emoji=':heart_eyes:' size={24}/>
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