import React from 'react'
import { Layout, Icon, Breadcrumb, Badge, Avatar, Menu, Dropdown, Popover, List } from 'antd'
import { Link } from 'react-router-dom'
import MockData from './../../mock'
import './index.less'
import avatarImg from './leon.png'

const LayoutHeader = Layout.Header;

const breadcrumbNameMap = {
    '/admin/Home': 'Home',
    '/admin/base': 'Base',
    '/admin/base/baseDetails': 'BaseDetails',
    '/admin/users': 'Users',
    '/admin/leaflet': 'Leaflet',
    '/admin/sensor': 'Sensor',
    '/admin/relay': 'Relay'
};


const menu = (
    <Menu>
        <Menu.Item>
            <a rel="noopener noreferrer" href="/admin/mesaage">React</a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" href="/admin/mesaage">Vue</a>
        </Menu.Item>
        <Menu.Item>
            <a rel="noopener noreferrer" href="/login">Sign out</a>
        </Menu.Item>
    </Menu>
);



export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'guest',
            path: this.props.router.location
        };
    }


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
                    <span className="last-breadcrumb-item">Home</span>
                </Breadcrumb.Item>) : (<Breadcrumb.Item key="home">
                    <Link to="/admin/home">Home</Link>
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

                    <div className="Welcome">Hi, {this.state.userName}</div>

                    <Dropdown trigger={['click']} overlayStyle={{}} overlay={menu} placement="bottomCenter">
                        <span className="user">
                            <Avatar shape="circle" src={avatarImg} size={36} />
                        </span>
                    </Dropdown>

                </div>
            </LayoutHeader>
        );
    }
}