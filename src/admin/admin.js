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

import axios from 'axios'
import apiConfig from './../config/apiConfig'

import { Layout, notification, Icon, Button } from 'antd';

axios.defaults.withCredentials=true


export default class Admin extends React.Component {

  state = {
    collapsed: true,
    alwaysShowNotification: false,
    userData:{
      username:"null",
      password:"null"
    }
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  notificationClosed = (key) => {
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
      description: '欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临欢迎光临。',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
      duration: 15,
      placement: 'bottomRight',
      btn,
      key: key,
      // onClose: this.notificationClosed,
    });
  };


  componentWillMount() {
    
  }

  componentDidMount() {
    // this.openNotification()
    // setInterval(() => {
    //   if (this.state.alwaysShowNotification) {
    //     this.openNotification()
    //   }
    // }, 60000)


    // console.log("admin componentWillMount");
    let history = this.props.router.history;
    let _this = this;
    axios.get(apiConfig.apiAddress + 'loginState')
      .then(function (response) {
        // console.log(response);
        if (response.data.status === "403") {
          console.log("user Unauthorized");
          history.push({
            "pathname": '/login',
          });
        }else{
          _this.setState({
            userData: response.data.data
          })
        }
      })
      .catch(function (error) {
        console.log(error);
      });


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
            user={this.state.userData}
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