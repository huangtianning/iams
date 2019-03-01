/* 
* 整个管理系统的主结构
*
*/
import React from 'react'
import './admin.less'

import Header from '../components/Header/index'
import Footer from '../components/Footer/index'
import Content from '../components/Content/index'
import NavLeft from '../components/NavLeft/index'

import { Layout, notification, Icon, Button } from 'antd';




export default class Admin extends React.Component {

  state = {
    collapsed: true,
    alwaysShowNotification: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  notificationClosed = (key)=>{
    notification.close(key)
    this.setState({
      alwaysShowNotification: false
    })
  }


  openNotification = () => {

    let key = `open${Date.now()}`;

    const btn = (
      <Button type="primary" size="small" onClick={() => this.notificationClosed(key)}>
        不再出现该通知
      </Button>
    );

    notification.open({
      message: '欢迎光临！',
      description: '感谢您关注我做的这个小项目，我正在积极寻找一份前端工程师的职位，假如您是HR，欢迎与我联系！点击右上角的文件图标可以查看我的简历和联系方式。',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      duration: 15,
      placement:'bottomRight',
      btn,
      key:key,
      // onClose: this.notificationClosed,
    });
  };

  componentDidMount() {
    this.openNotification()
    setInterval(()=>{
      if(this.state.alwaysShowNotification){
        this.openNotification()
      }
    },60000)
  }

  render() {
    return (
      <Layout className="Main">
        <NavLeft
          isCollapsed={this.state.collapsed}
          toggleHandler={this.toggle}
          pathname={this.props.router.location.pathname}
        />
        <Layout>
          <Header
            toggleHandler={this.toggle}
            isCollapsed={this.state.collapsed}
            router={this.props.router}
          />
          <Content>
            {this.props.children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}