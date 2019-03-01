import React from 'react'
import './index.less'
import { Table, Divider, Button, Icon, Avatar } from 'antd';
import MockData from './../../mock'
import NProgress from 'nprogress'
import './../../css/nprogress.css' //这个样式必须引入

//配置每一列属性
const columns = [{
    title: 'Avatar',
    dataIndex: 'Avatar',
    align: "center",
    width: 64,
    render: (text, record) => (
        <span>
            <Avatar size="large" shape="square" style={{ backgroundColor: record.avatarColor }}>
                {record.name[0]}
            </Avatar>
        </span>
    ),
}, {
    title: 'Name',
    dataIndex: 'name',
    align: "center",
    width: 240
}, {
    title: 'Gender',
    dataIndex: 'gender',
    align: "center",
    width: 120
}, {
    title: 'Age',
    dataIndex: 'age',
    align: "center",
    width: 160
}, {
    title: 'Birthday',
    dataIndex: 'birthday',
    align: "center",
    width: 200
},{
    title: 'Address',
    dataIndex: 'address',
    align: "center",
    width: 240
}, {
    title: 'Operation',
    dataIndex: 'operation',
    align: "center",
    width: 160,
    render: (text, record) => (
        <span>
            {/* <Button >Invite {record.name}</Button> */}
            <Button><Icon type="edit" /></Button>
            <Divider type="vertical" />
            <Button><Icon type="delete" /></Button>
        </span>
    ),
}];

//数据源
const data = MockData.usersList;
// for (let i = 0; i < 46; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }

//组件定义
export default class Users extends React.Component {

    componentWillMount(){
        NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false });
        NProgress.start();
    }

    componentDidMount(){
        NProgress.done()
    }

    render() {
        return (
            <div className="users-content">
                <Table
                    bordered={true}
                    columns={columns}
                    dataSource={data}
                    rowSelection={{}}
                    pagination={{
                        position: 'bottom',
                        defaultPageSize: 15
                    }}
                    scroll={{ x: 1600 }}
                />
            </div>
        )
    }
}

