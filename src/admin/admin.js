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

import {Layout} from 'antd';

export default class Admin extends React.Component{

  state = {
      collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    // console.log(this.state.collapsed);
  }
  
  componentWillMount(){
    
  }

  render(){
      return (
    <Layout className="Main">
      <NavLeft 
      isCollapsed={ this.state.collapsed }
      toggleHandler={ this.toggle }
      pathname={ this.props.router.location.pathname }
      />
      <Layout>
        <Header 
        toggleHandler={ this.toggle }
        isCollapsed={ this.state.collapsed }
        router={this.props.router}
        />
          <Content>
            { this.props.children }
          </Content>
        <Footer/>  
      </Layout>
    </Layout>
      );
  }
}