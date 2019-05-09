import React from 'react'
import { Layout, Menu, Icon  } from 'antd'
import './index.less'
import axios from 'axios'
import apiConfig from './../../config/apiConfig'
import { Link } from 'react-router-dom'

import Logo from '../Logo/index'
// import MenuConfig from './../../config/menuConfig'

const LayoutSider = Layout.Sider;
const SubMenu = Menu.SubMenu;

axios.defaults.withCredentials=true

export default class Sider extends React.Component {

    state = {
        // collapsed: false,
        collapsedWidth: 0,
        breakpointValue: 992,
        lessThanBreakpoint: false, //是否大于响应式断点
        selectedItem: '/admin/home'
    };

    onBreakpoint = () => {
        this.setState({ 
            collapsedWidth: this.state.lessThanBreakpoint ? 0 : 80,
            lessThanBreakpoint: !this.state.lessThanBreakpoint
        });
        // console.log(this.state.lessThanBreakpoint)
        // console.log(this.state.collapsedWidth)
    }


    componentWillMount(){
        // const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            // menuTreeNode:menuTreeNode,
             selectedItem: this.props.pathname
        });

        //判断浏览器可见区域是否小于断点并更新state
        if(document.body.clientWidth <= this.state.breakpointValue){
            this.setState({
                lessThanBreakpoint: true
            });
        };
    }

    componentDidMount(){
        let _this = this;
        axios.get(apiConfig.apiAddress + 'menu')
                .then(function (response) {
                    console.log(response);
                    let menuTreeNode = _this.renderMenu(response.data);
                    _this.setState({
                        menuTreeNode:menuTreeNode,
                         selectedItem: _this.props.pathname
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
    }

    componentWillReceiveProps(props){
        this.setState({
            selectedItem: props.pathname
        });
    }

    //递归渲染菜单，拼接菜单组件
    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={ <span><Icon type={ item.icon } /><span> { item.title } </span></span> } key={ item.key }>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return  <Menu.Item key={ item.key }> 
                        <Icon type={ item.icon } />
                        <span>{ item.title }</span>
                        <Link to={ item.key } />
                    </Menu.Item>
        });
    }

    render() {
        return (
            <LayoutSider
                breakpoint="lg"
                className="Sider"
                trigger={null}
                collapsedWidth={ this.state.collapsedWidth }
                collapsible
                collapsed={!this.props.isCollapsed}
                onBreakpoint={this.onBreakpoint}
                // onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                // onCollapse={this.onCollapse}
            >
            
                <Logo collapsed={ !this.props.isCollapsed }></Logo>

                <Menu className="menu" theme="light" selectedKeys={[this.state.selectedItem]} mode="inline">
                    
                    { this.state.menuTreeNode }

                </Menu>
            </LayoutSider>
        );
    }
}