import React from 'react'
import { Layout, Icon, Breadcrumb, Badge, Avatar, Menu, Dropdown, Popover, List, Drawer } from 'antd'
import { Link } from 'react-router-dom'
import MockData from './../../mock'
import './index.less'
import avatarImg from './leon.png'
import Resume from './../Resume'
import axios from 'axios'
import apiConfig from './../../config/apiConfig'

const LayoutHeader = Layout.Header;

const breadcrumbNameMap = {
    '/admin/Home': '主页',
    '/admin/base': 'Base',
    '/admin/base/baseDetails': 'BaseDetails',
    '/admin/users': 'Users',
    '/admin/leaflet': 'Leaflet',
    '/admin/apply_form': '申请表填写',
    '/admin/apply_check': '申请表检查'
};







export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.user.username,
            showDrawer: false,
            path: this.props.router.location
        };

        this.menu = (
            <Menu>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="/admin/mesaage">React</a>
                </Menu.Item>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="/admin/mesaage">Vue</a>
                </Menu.Item>
                <Menu.Item>
                    <span onClick={this.logout} rel="noopener noreferrer" >Sign out</span>
                </Menu.Item>
            </Menu>
        );

    }

    logout = () => {
        let history = this.props.router.history;
        axios.get(apiConfig.apiAddress + 'logout')
          .then(function (response) {
            if (response.data.status === "200" || response.data.status === "403") {
              console.log("user logout");
              history.push({
                "pathname": '/login',
              });
            }else{
              
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    showDrawer = () => {
        this.setState({
            showDrawer: true,
        });
    };

    onClose = () => {
        this.setState({
            showDrawer: false,
        });
    };

    renderBreadcrumbItem = (props) => {
        const { location } = props;
        const pathSnippets = location.pathname.split('/').filter(i => i).slice(1); //return ["admin", "base", "baseDetails", "7608696"] 去除/后的路由数组
        // console.log(pathSnippets)
        const extraBreadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;

            if (url === "/home") {
                return null;  //什么都不返回
            } else {
                if (index === (pathSnippets.length - 1)) {  //如果是最末级Breadcrumb.Item，使用文字span
                    return (
                        <Breadcrumb.Item key={url}>
                            <span className="last-breadcrumb-item">
                                {breadcrumbNameMap["/admin" + url]}
                            </span>
                        </Breadcrumb.Item>
                    );
                } else {                                     //否则使用Link来跳转
                    return (
                        <Breadcrumb.Item key={url}>
                            <Link to={"/admin" + url}>
                                {breadcrumbNameMap["/admin" + url]}
                            </Link>
                        </Breadcrumb.Item>
                    );
                }

            }
        });

        // console.log(extraBreadcrumbItems.length)

        const breadcrumbItems = [(
            pathSnippets[0] === "home" || pathSnippets.length === 0 ?

                (<Breadcrumb.Item key="home">
                    <span className="last-breadcrumb-item">主页</span>
                </Breadcrumb.Item>) : (<Breadcrumb.Item key="home">
                    <Link to="/admin/home">主页</Link>
                </Breadcrumb.Item>)
        )].concat(extraBreadcrumbItems);

        return breadcrumbItems;
    }


    render() {
        return (
            <LayoutHeader className="Header">
                <div className="Header-left">
                    <div onClick={this.props.toggleHandler} className="trigger">
                        <Icon
                            type={this.props.isCollapsed ? 'menu-unfold' : 'menu-fold'}
                        />
                    </div>
                    <div className="Breadcrumb-div">
                        <Breadcrumb className="Header-Breadcrumb">
                            {this.renderBreadcrumbItem(this.props.router)}
                        </Breadcrumb>
                    </div>
                </div>


                <div className="Header-right">

                    <div onClick={ this.showDrawer } className="inform-bell">
                        <Icon type="solution" className="inform-bell-icon" />
                    </div>
                    
                    <Drawer
                        className="resume"
                        placement="right"
                        closable={true}
                        width={document.body.clientWidth >= 640 ? 640:320}
                        onClose={this.onClose}
                        visible={this.state.showDrawer}
                    >
                        <Resume></Resume>
                    </Drawer>

                    <Popover
                        placement="bottomRight"
                        title={<span>Notification</span>}
                        content={
                            <List
                                itemLayout="horizontal"
                                dataSource={MockData.notificationList}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Avatar style={{ backgroundColor: item.avatarColor }} >{item.title[0]}</Avatar>}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description={item.description}
                                        />
                                    </List.Item>
                                )}
                            />
                        }
                        trigger="click">
                        <div className="inform-bell">
                            <Badge dot>
                                <Icon type="bell" className="inform-bell-icon" />
                            </Badge>
                        </div>
                    </Popover>

                    <div className="Welcome">Hi, {this.props.user.username}</div>

                    <Dropdown trigger={['click']} overlayStyle={{}} overlay={this.menu} placement="bottomCenter">
                        <span className="user">
                            <Avatar shape="circle" src={avatarImg} size={36} />
                        </span>
                    </Dropdown>

                </div>
            </LayoutHeader>
        );
    }
}